import { Op } from 'sequelize';

import type { Category } from './config.js';
import { buildExpectedProcessPath } from './tree.js';
import type { ControlPlaneModels, MwpSyncModels, UserRole } from './db/models.js';
import type { NormalizedEmployee } from './normalize.js';

export interface CurrentUserState {
  userId: string;
  employeeId: string;
  email: string | null;
  active: boolean;
  role: UserRole | null;
  roleAssignmentId: string | null;
  /** The category-specific PermissionGroup id actually assigned — the authoritative signal for
   * categoryChanged, since supervisor/team_leader collapse to the SAME legacy `role` value
   * (QA_MANAGER; see CATEGORY_TO_ROLE and db/models.ts's UserRole docstring). Comparing `role`
   * alone would miss a supervisor<->team_leader transition. */
  permissionGroupId: string | null;
  supervisorId: string | null;
  activeProcessPaths: string[];
}

export interface ChangedUser {
  current: CurrentUserState;
  incoming: NormalizedEmployee;
  statusChanged: boolean;
  supervisorChanged: boolean;
  nodeChanged: boolean;
  categoryChanged: boolean;
  emailChanged: boolean;
}

export interface DiffResult {
  newHires: NormalizedEmployee[];
  removed: CurrentUserState[];
  changed: ChangedUser[];
  unchangedCount: number;
  /** Brand-new fusion_ids this pull with no tracked category — not created, not counted anywhere else. */
  unclassifiedNewSkipped: number;
  /** employeeId -> internal userId, covering every user currently in this workspace (active or not). */
  employeeIdToUserId: Map<string, string>;
}

/** Loads every MWP-sourced user currently in the workspace, keyed by employeeId (= fusion_id). */
export async function loadCurrentState(
  models: MwpSyncModels,
  controlPlaneModels: ControlPlaneModels,
  workspaceId: string,
): Promise<Map<string, CurrentUserState>> {
  const { RoleAssignment, NodeAssignment, WorkspaceNode } = models;
  const { User } = controlPlaneModels;

  const users = await User.findAll({ where: { workspaceId, employeeId: { [Op.ne]: null } } });
  const userIds = users.map((u) => u.id);
  if (userIds.length === 0) return new Map();

  // Ordered oldest-first so that if a user ever has more than one RoleAssignment (the "admin
  // manually adds a second role" scenario from the original governance discussion), the FIRST
  // one — created by this sync job at hire time — deterministically wins as "the one this job
  // owns and diffs against." Without an explicit order, Map(rows.map(...)) would pick whichever
  // row Postgres happened to return last, arbitrarily. Any later, admin-added RoleAssignment rows
  // are intentionally left alone here, matching "role changed -> NOT auto-updated" governance.
  const roleAssignments = await RoleAssignment.findAll({
    where: { workspaceId, userId: { [Op.in]: userIds } },
    order: [['createdAt', 'ASC']],
  });
  const roleAssignmentByUserId = new Map<string, (typeof roleAssignments)[number]>();
  for (const ra of roleAssignments) {
    if (!roleAssignmentByUserId.has(ra.userId)) {
      roleAssignmentByUserId.set(ra.userId, ra);
    }
  }

  const nodeAssignments = await NodeAssignment.findAll({
    where: { userId: { [Op.in]: userIds }, status: 'active' },
  });
  const nodeIds = [...new Set(nodeAssignments.map((na) => na.nodeId))];
  const nodes = nodeIds.length
    ? await WorkspaceNode.findAll({ where: { id: { [Op.in]: nodeIds } } })
    : [];
  const pathByNodeId = new Map(nodes.map((n) => [n.id, n.path]));

  const processPathsByUserId = new Map<string, string[]>();
  for (const na of nodeAssignments) {
    const path = pathByNodeId.get(na.nodeId);
    if (!path) continue;
    const list = processPathsByUserId.get(na.userId) ?? [];
    list.push(path);
    processPathsByUserId.set(na.userId, list);
  }

  const result = new Map<string, CurrentUserState>();
  for (const user of users) {
    if (!user.employeeId) continue;
    const ra = roleAssignmentByUserId.get(user.id);
    result.set(user.employeeId, {
      userId: user.id,
      employeeId: user.employeeId,
      email: user.email,
      active: user.active,
      role: (user.role as UserRole) ?? null,
      roleAssignmentId: ra?.id ?? null,
      permissionGroupId: ra?.permissionGroupId ?? null,
      supervisorId: ra?.supervisorId ?? null,
      activeProcessPaths: (processPathsByUserId.get(user.id) ?? []).sort(),
    });
  }
  return result;
}

function expectedProcessPaths(rootPath: string, incoming: NormalizedEmployee): string[] {
  return incoming.clientProcessPairs
    .map((pair) => buildExpectedProcessPath(rootPath, incoming.officeName, pair.client, pair.process))
    .sort();
}

function sameStringArray(a: string[], b: string[]): boolean {
  return a.length === b.length && a.every((value, index) => value === b[index]);
}

/**
 * `incomingEmployees` must be the FULL normalized pull, including unclassified records
 * (category === null) — NOT pre-filtered to classified-only. Removal detection below needs to
 * see every fusion_id MWP still reports, classified or not: an existing tracked user whose new
 * org_role/dept_name no longer matches any of our 4 rules (e.g. promoted from agent to Manager)
 * must show up here as a category-change-to-null (flagged for review), never as an absence from
 * the feed — pre-filtering them out upstream would make that transition indistinguishable from
 * the person actually leaving the company, and this function would wrongly soft-deactivate them.
 */
export function diff(
  currentByEmployeeId: Map<string, CurrentUserState>,
  incomingEmployees: NormalizedEmployee[],
  rootPath: string,
  permissionGroupIdByCategory: Record<Category, string>,
): DiffResult {
  const employeeIdToUserId = new Map<string, string>();
  for (const [employeeId, state] of currentByEmployeeId) {
    employeeIdToUserId.set(employeeId, state.userId);
  }

  const incomingFusionIds = new Set(incomingEmployees.map((e) => e.fusionId));

  const newHires: NormalizedEmployee[] = [];
  const changed: ChangedUser[] = [];
  let unchangedCount = 0;
  let unclassifiedNewSkipped = 0;

  for (const incoming of incomingEmployees) {
    const current = currentByEmployeeId.get(incoming.fusionId);
    if (!current) {
      // Only auto-create users we can classify. A brand-new person we can't classify (corporate
      // support etc.) is out of scope for User/tree mutation — see USER_MANAGEMENT.md.
      if (incoming.category !== null) {
        newHires.push(incoming);
      } else {
        unclassifiedNewSkipped++;
      }
      continue;
    }

    // Compared by permissionGroupId, not the coarse `role` column: supervisor and team_leader
    // both map to the SAME legacy role value (QA_MANAGER — see CATEGORY_TO_ROLE in apply.ts), so
    // comparing `role` would miss a supervisor<->team_leader transition. permissionGroupId is
    // category-specific and catches every transition, including category dropping to null (no
    // `!== null` guard here — that must still register as a change against a non-null current).
    const expectedPermissionGroupId = incoming.category ? permissionGroupIdByCategory[incoming.category] : null;
    const categoryChanged = expectedPermissionGroupId !== current.permissionGroupId;

    // Known limitation: employeeIdToUserId only knows about users already in the DB before this
    // run. If an EXISTING employee's new supervisor is itself a brand-new hire in this SAME daily
    // batch, that supervisor resolves to undefined here (not yet created) and this looks
    // unchanged for one day; apply.ts's own new-hire pass 2 handles the equivalent case for new
    // hires themselves, but a full fix for existing users would require re-diffing supervisors
    // after all creates land. Self-corrects on the next run once the new hire exists in the DB.
    const incomingSupervisorUserId = incoming.supervisorMwpId
      ? employeeIdToUserId.get(incoming.supervisorMwpId) ?? null
      : null;
    const supervisorChanged = incomingSupervisorUserId !== current.supervisorId;

    const statusChanged = incoming.active !== current.active;
    const emailChanged = incoming.email !== current.email;
    const nodeChanged = !sameStringArray(
      expectedProcessPaths(rootPath, incoming),
      current.activeProcessPaths,
    );

    if (!categoryChanged && !supervisorChanged && !statusChanged && !emailChanged && !nodeChanged) {
      unchangedCount++;
      continue;
    }

    changed.push({
      current,
      incoming,
      statusChanged,
      supervisorChanged,
      nodeChanged,
      categoryChanged,
      emailChanged,
    });
  }

  const removed: CurrentUserState[] = [];
  for (const [employeeId, state] of currentByEmployeeId) {
    if (!incomingFusionIds.has(employeeId) && state.active) {
      removed.push(state);
    }
  }

  return { newHires, removed, changed, unchangedCount, unclassifiedNewSkipped, employeeIdToUserId };
}
