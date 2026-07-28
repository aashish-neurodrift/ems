import { randomBytes } from 'node:crypto';

import type { Sequelize, Transaction } from 'sequelize';

import type { MwpSyncConfig } from './config.js';
import type { ChangedUser, DiffResult } from './diff.js';
import type { MwpSyncModels, UserRole } from './db/models.js';
import type { NormalizedEmployee } from './normalize.js';
import { NodeTreeResolver } from './tree.js';

export interface ApplyResult {
  added: number;
  updated: number;
  deactivated: number;
  flagged: number;
  warnings: string[];
  errors: { fusionId: string; message: string }[];
}

const CATEGORY_TO_ROLE: Record<string, UserRole> = {
  agent: 'AGENT',
  qa: 'QA',
  supervisor: 'SUPERVISOR',
  team_leader: 'TEAM_LEADER',
};

const UNASSIGNED_PAIR = { client: 'Unassigned', process: 'Unassigned' };

/**
 * Placeholder credential for bulk-synced accounts — never a usable login. blocked=true +
 * mustChangePassword=true until a separate invite/onboarding flow (out of scope here) issues
 * real credentials.
 */
function placeholderPasswordHash(): string {
  return randomBytes(32).toString('hex');
}

async function assignNodes(
  resolver: NodeTreeResolver,
  transaction: Transaction,
  userId: string,
  employee: NormalizedEmployee,
  models: MwpSyncModels,
): Promise<void> {
  const pairs = employee.clientProcessPairs.length ? employee.clientProcessPairs : [UNASSIGNED_PAIR];
  for (const pair of pairs) {
    const nodeId = await resolver.resolveProcessLeaf(transaction, employee.officeName, pair.client, pair.process);
    await models.NodeAssignment.create({ userId, nodeId, status: 'active' }, { transaction });
  }
}

async function createUser(
  models: MwpSyncModels,
  config: MwpSyncConfig,
  transaction: Transaction,
  resolver: NodeTreeResolver,
  employee: NormalizedEmployee,
): Promise<{ userId: string; roleAssignmentId: string }> {
  if (!employee.category) {
    throw new Error(`createUser called on unclassified employee ${employee.fusionId}`);
  }
  const role = CATEGORY_TO_ROLE[employee.category];

  const user = await models.User.create(
    {
      workspaceId: config.workspaceId,
      employeeId: employee.fusionId,
      email: employee.email,
      username: `mwp:${employee.fusionId}`,
      displayName: employee.displayName,
      passwordHash: placeholderPasswordHash(),
      active: employee.active,
      blocked: true,
      mustChangePassword: true,
      role,
      roles: [role],
    },
    { transaction },
  );

  const roleAssignment = await models.RoleAssignment.create(
    {
      userId: user.id,
      workspaceId: config.workspaceId,
      permissionGroupId: config.permissionGroupIdByCategory[employee.category],
      status: 'active',
    },
    { transaction },
  );

  await assignNodes(resolver, transaction, user.id, employee, models);

  return { userId: user.id, roleAssignmentId: roleAssignment.id };
}

/**
 * Always applies the supervisor change (MWP is the source of truth for who supervises whom
 * today) and always appends to mwp_supervisor_history first — this is what makes vocational
 * rotation safe: a rotation next week is just another history row, never a blocked or
 * debounced update, and never routed to the manual review queue (only category changes are).
 */
async function applySupervisor(
  models: MwpSyncModels,
  transaction: Transaction,
  syncBatchId: string,
  userId: string,
  roleAssignmentId: string,
  oldSupervisorId: string | null,
  newSupervisorId: string | null,
): Promise<void> {
  if (newSupervisorId === oldSupervisorId) return;
  await models.MwpSupervisorHistory.create(
    { userId, oldSupervisorId, newSupervisorId, syncBatchId },
    { transaction },
  );
  await models.RoleAssignment.update(
    { supervisorId: newSupervisorId },
    { where: { id: roleAssignmentId }, transaction },
  );
}

export async function applyDiff(
  sequelize: Sequelize,
  models: MwpSyncModels,
  config: MwpSyncConfig,
  diffResult: DiffResult,
  syncBatchId: string,
): Promise<ApplyResult> {
  const result: ApplyResult = { added: 0, updated: 0, deactivated: 0, flagged: 0, warnings: [], errors: [] };

  // One resolver for the whole run — its cache is what makes ~13,835 employees sharing the same
  // ~30 location / few-hundred client/process branches cost one lookup per distinct node, not
  // one per employee. See tree.ts's NodeTreeResolver docstring for why sharing it across each
  // user's own transaction is still safe.
  const nodeResolver = new NodeTreeResolver(models, config.workspaceId);

  // Batch-local employeeId -> userId map, seeded from the DB snapshot and grown as new hires are
  // created below. Needed because a new hire's supervisor may be another new hire in the SAME
  // daily batch (e.g. a new team onboarded together) — that supervisor won't be in the DB yet.
  const batchUserIdByFusionId = new Map(diffResult.employeeIdToUserId);
  const roleAssignmentIdByFusionId = new Map<string, string>();

  // Pass 1: create every new-hire User + RoleAssignment + node assignment (no supervisor link yet).
  for (const employee of diffResult.newHires) {
    try {
      await sequelize.transaction(async (transaction) => {
        const { userId, roleAssignmentId } = await createUser(models, config, transaction, nodeResolver, employee);
        batchUserIdByFusionId.set(employee.fusionId, userId);
        roleAssignmentIdByFusionId.set(employee.fusionId, roleAssignmentId);
      });
      result.added++;
    } catch (error) {
      result.errors.push({ fusionId: employee.fusionId, message: (error as Error).message });
    }
  }

  // Pass 2: resolve supervisor links now that every user in this batch (new or existing) has an id.
  for (const employee of diffResult.newHires) {
    const roleAssignmentId = roleAssignmentIdByFusionId.get(employee.fusionId);
    if (!roleAssignmentId) continue; // creation failed above, already recorded as an error
    if (!employee.supervisorMwpId) continue;

    const newSupervisorId = batchUserIdByFusionId.get(employee.supervisorMwpId) ?? null;
    if (!newSupervisorId) {
      result.warnings.push(
        `${employee.fusionId}: supervisor ${employee.supervisorMwpId} not found in this pull (orphaned reference) — left unresolved`,
      );
      continue;
    }
    try {
      await sequelize.transaction(async (transaction) => {
        await applySupervisor(
          models,
          transaction,
          syncBatchId,
          batchUserIdByFusionId.get(employee.fusionId)!,
          roleAssignmentId,
          null,
          newSupervisorId,
        );
      });
    } catch (error) {
      result.errors.push({ fusionId: employee.fusionId, message: (error as Error).message });
    }
  }

  // Changed users: apply per-field per the condition table, one transaction per user.
  for (const change of diffResult.changed) {
    try {
      await sequelize.transaction((transaction) =>
        applyChange(models, config, transaction, nodeResolver, syncBatchId, batchUserIdByFusionId, change, result),
      );
      result.updated++;
    } catch (error) {
      result.errors.push({ fusionId: change.incoming.fusionId, message: (error as Error).message });
    }
  }

  // Removed: soft-deactivate only, never delete — history/audit stays intact.
  for (const state of diffResult.removed) {
    try {
      await models.User.update({ active: false }, { where: { id: state.userId } });
      result.deactivated++;
    } catch (error) {
      result.errors.push({ fusionId: state.employeeId, message: (error as Error).message });
    }
  }

  return result;
}

async function applyChange(
  models: MwpSyncModels,
  config: MwpSyncConfig,
  transaction: Transaction,
  nodeResolver: NodeTreeResolver,
  syncBatchId: string,
  batchUserIdByFusionId: Map<string, string>,
  change: ChangedUser,
  result: ApplyResult,
): Promise<void> {
  const { current, incoming } = change;

  if (change.statusChanged || change.emailChanged) {
    const updates: { active?: boolean; email?: string | null } = {};
    if (change.statusChanged) updates.active = incoming.active;
    if (change.emailChanged) updates.email = incoming.email;
    await models.User.update(updates, { where: { id: current.userId }, transaction });
  }

  if (change.nodeChanged) {
    await models.NodeAssignment.update(
      { status: 'revoked' },
      { where: { userId: current.userId, status: 'active' }, transaction },
    );
    await assignNodes(nodeResolver, transaction, current.userId, incoming, models);
  }

  if (change.supervisorChanged) {
    if (!current.roleAssignmentId) {
      result.warnings.push(`${incoming.fusionId}: supervisor changed but no RoleAssignment exists — skipped`);
    } else {
      const newSupervisorId = incoming.supervisorMwpId
        ? batchUserIdByFusionId.get(incoming.supervisorMwpId) ?? null
        : null;
      if (incoming.supervisorMwpId && !newSupervisorId) {
        result.warnings.push(
          `${incoming.fusionId}: supervisor ${incoming.supervisorMwpId} not found in this pull (orphaned reference) — left unresolved`,
        );
      } else {
        await applySupervisor(
          models,
          transaction,
          syncBatchId,
          current.userId,
          current.roleAssignmentId,
          current.supervisorId,
          newSupervisorId,
        );
      }
    }
  }

  // Category changes are never auto-applied — protects manually-added extra roles in AIQMS
  // from being silently overwritten by MWP's single-role view.
  if (change.categoryChanged) {
    await models.MwpManualReviewQueue.create(
      {
        fusionId: incoming.fusionId,
        changeType: 'category_changed',
        before: { role: current.role },
        after: { category: incoming.category },
      },
      { transaction },
    );
    result.flagged++;
  }
}
