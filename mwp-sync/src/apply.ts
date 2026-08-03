import { randomBytes, randomUUID } from 'node:crypto';

import { Op, QueryTypes, type Sequelize, type Transaction } from 'sequelize';

import type { MwpSyncConfig } from './config.js';
import type { ChangedUser, DiffResult } from './diff.js';
import type { ControlPlaneModels, MwpSyncModels, UserRole } from './db/models.js';
import type { NormalizedEmployee } from './normalize.js';
import { buildTreeForRequests } from './tree.js';
import type { RootNode, TreeRequest } from './tree.js';

export interface ApplyResult {
  added: number;
  updated: number;
  deactivated: number;
  flagged: number;
  warnings: string[];
  errors: { fusionId: string; message: string }[];
}

/** Sequelize's own `.message` on a bulk validation/DB error is often just "Validation error" or
 * similar — the actionable detail is nested in `.errors` (ValidationErrorItem[]) or `.original`
 * (the underlying pg error). Surface both so chunk failures are diagnosable from ApplyResult
 * alone, not just from re-running with a debugger attached. */
function describeError(error: unknown): string {
  const err = error as {
    message?: string;
    errors?: { message: string; path?: string }[];
    original?: { message?: string; detail?: string };
  };
  const parts = [err.message ?? String(error)];
  if (err.errors?.length) {
    parts.push(...err.errors.map((e) => (e.path ? `${e.path}: ${e.message}` : e.message)));
  }
  if (err.original?.detail) {
    parts.push(err.original.detail);
  } else if (err.original?.message) {
    parts.push(err.original.message);
  }
  return parts.join(' | ');
}

// SUPERVISOR/TEAM_LEADER aren't valid users.role values (see db/models.ts's UserRole docstring —
// real CHECK constraint, not a TS-only gap). QA_MANAGER is the legacy bucket both map to per an
// explicit call — their actual permissions still come from the supervisor/team_leader
// PermissionGroup on RoleAssignment, not this coarse field.
const CATEGORY_TO_ROLE: Record<string, UserRole> = {
  agent: 'AGENT',
  qa: 'QA',
  supervisor: 'QA_MANAGER',
  team_leader: 'QA_MANAGER',
};

const UNASSIGNED_PAIR = { client: 'Unassigned', process: 'Unassigned' };

function pairsFor(employee: NormalizedEmployee): { client: string; process: string }[] {
  return employee.clientProcessPairs.length ? employee.clientProcessPairs : [UNASSIGNED_PAIR];
}

/** Synchronous now that the whole tree is pre-resolved by buildTreeForRequests — throws only if
 * called with a pair that wasn't included in the upfront treeRequests gathering (a bug, not a
 * runtime data issue). */
function leafIdsFor(employee: NormalizedEmployee, leafIdByKey: Map<string, string>): string[] {
  return pairsFor(employee).map((pair) => {
    const key = `${employee.officeName}||${pair.client}||${pair.process}`;
    const nodeId = leafIdByKey.get(key);
    if (!nodeId) {
      throw new Error(`Tree leaf not pre-resolved for ${employee.fusionId} (${key})`);
    }
    return nodeId;
  });
}

/**
 * Placeholder credential for bulk-synced accounts — never a usable login. blocked=true +
 * mustChangePassword=true until a separate invite/onboarding flow (out of scope here) issues
 * real credentials.
 */
function placeholderPasswordHash(): string {
  return randomBytes(32).toString('hex');
}

interface CreatedNewHire {
  fusionId: string;
  userId: string;
  roleAssignmentId: string;
}

/**
 * Creates a whole chunk of new hires in TWO separate transactions against TWO separate
 * databases — `users` in the control-plane DB (see db/models.ts's initControlPlaneModels
 * docstring: control-plane data always, regardless of workspace dbStrategy), then
 * RoleAssignment+NodeAssignment in the workspace's tenant DB, referencing those same
 * pre-generated ids (no cross-database FK to satisfy — see node-guardrails-sql.ts's
 * dropCrossDatabaseForeignKeys). Postgres has no cross-database transactions, so this can't be
 * a single atomic unit; control-plane is written first as the authoritative identity record.
 *
 * If the control-plane step fails, nothing is created — safe to retry, still a "new hire" next
 * run. If control-plane succeeds but the tenant step fails, the User row is already committed;
 * the next run's diff() will see them as an EXISTING user (via loadCurrentState's control-plane
 * query) with no RoleAssignment/NodeAssignment yet. nodeChanged self-heals their node assignment
 * on that next run (see applyChange), but a missing RoleAssignment does NOT currently
 * self-heal (applyChange only updates an existing RoleAssignment, never creates one) — a known,
 * narrow gap accepted here in exchange for chunked writes; rare in practice since both steps
 * write to healthy databases mid-run.
 *
 * IDs are generated here (not left to the DB default) so RoleAssignment/NodeAssignment can
 * reference their User's id without reading it back from the other database.
 *
 * Trade-off vs. one-transaction-per-person: if any row in a chunk's bulkCreate fails (e.g. a
 * constraint violation), that WHOLE chunk's step rolls back, not just that one person — the
 * caller records every fusionId in the chunk as an error. Chosen deliberately over per-person
 * transactions because round-trip latency to a remote DB, not CPU, was the dominant cost.
 *
 * `users.email` is UNIQUE GLOBALLY across the whole control-plane DB (every workspace/tenant —
 * needed since login-by-email has no workspace scoping, see AuthRepository.findUserByIdentifier).
 * MWP's raw feed has real duplicate email_id_off values across different employees (a source data
 * quality issue, not something to "fix" by guessing) — the SAME literal email can't be stored on
 * more than one user. Whoever claims an email first (DB order, or earlier in this same run via
 * `usedEmails`) keeps it; every later duplicate gets `email: null` instead, falling back to
 * employeeId/username as their login identifier (already supported — see the frontend's
 * `loginIdentifier`/`identifierTypeOf` in users.real.ts) rather than failing the whole chunk.
 */
async function createUsersChunk(
  controlPlaneModels: ControlPlaneModels,
  models: MwpSyncModels,
  config: MwpSyncConfig,
  controlPlaneSequelize: Sequelize,
  sequelize: Sequelize,
  leafIdByKey: Map<string, string>,
  usedEmails: Set<string>,
  employees: NormalizedEmployee[],
): Promise<CreatedNewHire[]> {
  const candidateEmails = [...new Set(employees.map((e) => e.email).filter((e): e is string => e !== null))];
  const alreadyPersisted =
    candidateEmails.length > 0
      ? await controlPlaneModels.User.findAll({
          where: { email: { [Op.in]: candidateEmails } },
          attributes: ['email'],
        })
      : [];
  for (const row of alreadyPersisted) {
    if (row.email) usedEmails.add(row.email);
  }

  const userRows: {
    id: string;
    workspaceId: string;
    employeeId: string;
    email: string | null;
    username: string;
    displayName: string;
    passwordHash: string;
    active: boolean;
    blocked: boolean;
    mustChangePassword: boolean;
    role: UserRole;
    roles: UserRole[];
  }[] = [];
  const roleRows: {
    id: string;
    userId: string;
    workspaceId: string;
    permissionGroupId: string;
    status: 'active';
  }[] = [];
  const nodeAssignmentRows: { userId: string; nodeId: string; status: 'active' }[] = [];
  const created: CreatedNewHire[] = [];

  for (const employee of employees) {
    if (!employee.category) {
      throw new Error(`createUsersChunk called on unclassified employee ${employee.fusionId}`);
    }
    const role = CATEGORY_TO_ROLE[employee.category];
    const userId = randomUUID();
    const roleAssignmentId = randomUUID();

    let email = employee.email;
    if (email !== null) {
      if (usedEmails.has(email)) {
        email = null;
      } else {
        usedEmails.add(email);
      }
    }

    userRows.push({
      id: userId,
      workspaceId: config.workspaceId,
      employeeId: employee.fusionId,
      email,
      username: `mwp:${employee.fusionId}`,
      displayName: employee.displayName,
      passwordHash: placeholderPasswordHash(),
      active: employee.active,
      blocked: true,
      mustChangePassword: true,
      role,
      roles: [role],
    });

    roleRows.push({
      id: roleAssignmentId,
      userId,
      workspaceId: config.workspaceId,
      permissionGroupId: config.permissionGroupIdByCategory[employee.category],
      status: 'active',
    });

    for (const nodeId of leafIdsFor(employee, leafIdByKey)) {
      nodeAssignmentRows.push({ userId, nodeId, status: 'active' });
    }

    created.push({ fusionId: employee.fusionId, userId, roleAssignmentId });
  }

  await controlPlaneSequelize.transaction((transaction) =>
    controlPlaneModels.User.bulkCreate(userRows, { transaction }),
  );

  await sequelize.transaction(async (transaction) => {
    await models.RoleAssignment.bulkCreate(roleRows, { transaction });
    if (nodeAssignmentRows.length > 0) {
      await models.NodeAssignment.bulkCreate(nodeAssignmentRows, { transaction });
    }
  });

  return created;
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
  controlPlaneSequelize: Sequelize,
  controlPlaneModels: ControlPlaneModels,
  sequelize: Sequelize,
  models: MwpSyncModels,
  config: MwpSyncConfig,
  diffResult: DiffResult,
  syncBatchId: string,
  root: RootNode,
): Promise<ApplyResult> {
  const result: ApplyResult = { added: 0, updated: 0, deactivated: 0, flagged: 0, warnings: [], errors: [] };

  // Resolve the WHOLE Geography->Country->Location->Client->Process tree needed by this run's new
  // hires AND changed-node users in ONE pass, before any User/RoleAssignment/NodeAssignment write
  // happens. This is what turns "one resolveProcessLeaf round trip per employee" (the actual
  // bottleneck at ~13,835 employees) into a handful of level-by-level bulk lookups/creates total
  // — see tree.ts's buildTreeForRequests docstring.
  const treeRequests: TreeRequest[] = [];
  for (const employee of diffResult.newHires) {
    for (const pair of pairsFor(employee)) {
      treeRequests.push({ officeName: employee.officeName, client: pair.client, process: pair.process });
    }
  }
  for (const change of diffResult.changed) {
    if (!change.nodeChanged) continue;
    for (const pair of pairsFor(change.incoming)) {
      treeRequests.push({ officeName: change.incoming.officeName, client: pair.client, process: pair.process });
    }
  }
  const leafIdByKey = await sequelize.transaction((transaction) =>
    buildTreeForRequests(models, config.workspaceId, transaction, root, treeRequests),
  );

  // Batch-local employeeId -> userId map, seeded from the DB snapshot and grown as new hires are
  // created below. Needed because a new hire's supervisor may be another new hire in the SAME
  // daily batch (e.g. a new team onboarded together) — that supervisor won't be in the DB yet.
  const batchUserIdByFusionId = new Map(diffResult.employeeIdToUserId);
  const roleAssignmentIdByFusionId = new Map<string, string>();

  // Shared across every chunk (and the changed-users loop below) — see createUsersChunk's
  // docstring: users.email is unique GLOBALLY across the control plane, and MWP's raw data has
  // real duplicate emails across different employees.
  const usedEmails = new Set<string>();

  // Pass 1: create every new-hire User + RoleAssignment + node assignment (no supervisor link
  // yet), in chunks — see createUsersChunk's docstring for why (round-trip latency, not CPU, was
  // the bottleneck at one transaction per person). Node ids are now a plain map lookup (tree
  // already resolved above), so chunks can be large without any per-employee DB call inside them.
  const NEW_HIRE_CHUNK_SIZE = 1000;
  for (let i = 0; i < diffResult.newHires.length; i += NEW_HIRE_CHUNK_SIZE) {
    const chunk = diffResult.newHires.slice(i, i + NEW_HIRE_CHUNK_SIZE);
    try {
      const createdChunk = await createUsersChunk(
        controlPlaneModels,
        models,
        config,
        controlPlaneSequelize,
        sequelize,
        leafIdByKey,
        usedEmails,
        chunk,
      );
      for (const { fusionId, userId, roleAssignmentId } of createdChunk) {
        batchUserIdByFusionId.set(fusionId, userId);
        roleAssignmentIdByFusionId.set(fusionId, roleAssignmentId);
      }
      result.added += createdChunk.length;
    } catch (error) {
      for (const employee of chunk) {
        result.errors.push({ fusionId: employee.fusionId, message: describeError(error) });
      }
    }
  }

  // Pass 2: resolve supervisor links now that every user in this batch (new or existing) has an
  // id. Batched the same way as Pass 1: one MwpSupervisorHistory bulkCreate + one raw multi-row
  // UPDATE per chunk instead of a transaction per person.
  const supervisorLinks: { fusionId: string; userId: string; roleAssignmentId: string; newSupervisorId: string }[] =
    [];
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
    supervisorLinks.push({
      fusionId: employee.fusionId,
      userId: batchUserIdByFusionId.get(employee.fusionId)!,
      roleAssignmentId,
      newSupervisorId,
    });
  }

  const SUPERVISOR_LINK_CHUNK_SIZE = 500;
  for (let i = 0; i < supervisorLinks.length; i += SUPERVISOR_LINK_CHUNK_SIZE) {
    const chunk = supervisorLinks.slice(i, i + SUPERVISOR_LINK_CHUNK_SIZE);
    try {
      await sequelize.transaction(async (transaction) => {
        await models.MwpSupervisorHistory.bulkCreate(
          chunk.map((link) => ({
            userId: link.userId,
            oldSupervisorId: null,
            newSupervisorId: link.newSupervisorId,
            syncBatchId,
          })),
          { transaction },
        );
        await sequelize.query(
          `UPDATE role_assignments AS ra
           SET supervisor_id = v.supervisor_id::uuid
           FROM (
             SELECT unnest(:ids::uuid[]) AS id, unnest(:supervisorIds::uuid[]) AS supervisor_id
           ) AS v
           WHERE ra.id = v.id`,
          {
            replacements: {
              ids: chunk.map((link) => link.roleAssignmentId),
              supervisorIds: chunk.map((link) => link.newSupervisorId),
            },
            transaction,
            type: QueryTypes.UPDATE,
          },
        );
      });
    } catch (error) {
      for (const link of chunk) {
        result.errors.push({ fusionId: link.fusionId, message: describeError(error) });
      }
    }
  }

  // Changed users: `active`/`email` go to the control-plane User row (its own small update, not
  // part of the tenant transaction below — different database). Everything else
  // (RoleAssignment/NodeAssignment/MwpSupervisorHistory/MwpManualReviewQueue) is tenant-owned,
  // one transaction per user.
  for (const change of diffResult.changed) {
    try {
      if (change.statusChanged || change.emailChanged) {
        const updates: { active?: boolean; email?: string | null } = {};
        if (change.statusChanged) updates.active = change.incoming.active;
        if (change.emailChanged) {
          // Same global-uniqueness guard as createUsersChunk — a new email colliding with
          // another user (this run or already persisted) is dropped to null rather than failing.
          let email = change.incoming.email;
          if (email !== null) {
            if (usedEmails.has(email)) {
              email = null;
            } else {
              const collision = await controlPlaneModels.User.findOne({ where: { email } });
              if (collision && collision.id !== change.current.userId) {
                email = null;
              } else {
                usedEmails.add(email);
              }
            }
          }
          updates.email = email;
        }
        await controlPlaneModels.User.update(updates, { where: { id: change.current.userId } });
      }
      await sequelize.transaction((transaction) =>
        applyChange(models, transaction, leafIdByKey, syncBatchId, batchUserIdByFusionId, change, result),
      );
      result.updated++;
    } catch (error) {
      result.errors.push({ fusionId: change.incoming.fusionId, message: describeError(error) });
    }
  }

  // Removed: soft-deactivate only, never delete — history/audit stays intact. `users.active`
  // lives in the control plane.
  for (const state of diffResult.removed) {
    try {
      await controlPlaneModels.User.update({ active: false }, { where: { id: state.userId } });
      result.deactivated++;
    } catch (error) {
      result.errors.push({ fusionId: state.employeeId, message: describeError(error) });
    }
  }

  return result;
}

/** Tenant-side changes only (RoleAssignment/NodeAssignment/MwpSupervisorHistory/
 * MwpManualReviewQueue) — `active`/`email` on the control-plane User row are handled by the
 * caller, in a separate small update against a different database. */
async function applyChange(
  models: MwpSyncModels,
  transaction: Transaction,
  leafIdByKey: Map<string, string>,
  syncBatchId: string,
  batchUserIdByFusionId: Map<string, string>,
  change: ChangedUser,
  result: ApplyResult,
): Promise<void> {
  const { current, incoming } = change;

  if (change.nodeChanged) {
    await models.NodeAssignment.update(
      { status: 'revoked' },
      { where: { userId: current.userId, status: 'active' }, transaction },
    );
    const nodeAssignmentRows = leafIdsFor(incoming, leafIdByKey).map((nodeId) => ({
      userId: current.userId,
      nodeId,
      status: 'active' as const,
    }));
    await models.NodeAssignment.bulkCreate(nodeAssignmentRows, { transaction });
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
