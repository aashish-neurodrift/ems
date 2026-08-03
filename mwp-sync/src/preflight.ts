import { QueryTypes, type Sequelize } from 'sequelize';

import type { MwpSyncConfig } from './config.js';

// 'users' deliberately excluded — it's control-plane data, not tenant data (see
// db/models.ts's initControlPlaneModels docstring); a tenant DB's own `users` table, if one
// exists at all, is unused leftover schema, not something this job reads or writes.
const REQUIRED_CORE_TABLES = ['workspace_nodes', 'node_assignments', 'role_assignments'];

/**
 * Last-line-of-defense guard before this job ever writes a row. `DATABASE_URL` is the only
 * connection this whole process opens (see run.ts/index.ts), so if this check passes, every
 * subsequent read/write in the run is provably scoped to the one host verified here.
 *
 * Fails closed: any missing env var, host mismatch, missing core table, or missing
 * PermissionGroup row aborts the run before bootstrapMwpSyncTables/runSyncWithConnection touch
 * anything.
 */
export async function assertTargetIsDedicatedWorkspaceDb(
  sequelize: Sequelize,
  config: MwpSyncConfig,
): Promise<void> {
  const expectedHost = process.env.MWP_SYNC_EXPECTED_DB_HOST;
  if (!expectedHost) {
    throw new Error(
      'Missing required environment variable: MWP_SYNC_EXPECTED_DB_HOST. Set it to the exact ' +
        "hostname of the target workspace's dedicated database — this is a deliberate guard " +
        'against DATABASE_URL ever pointing at the shared/shard database by mistake.',
    );
  }

  const actualHost = new URL(config.databaseUrl).hostname;
  if (actualHost !== expectedHost) {
    throw new Error(
      `Refusing to run: DATABASE_URL host "${actualHost}" does not match ` +
        `MWP_SYNC_EXPECTED_DB_HOST "${expectedHost}". Aborting before any read/write.`,
    );
  }

  for (const table of REQUIRED_CORE_TABLES) {
    const rows = await sequelize.query<{ exists: string | null }>(
      'SELECT to_regclass(:table) AS exists',
      { replacements: { table: `public.${table}` }, type: QueryTypes.SELECT },
    );
    if (!rows[0]?.exists) {
      throw new Error(
        `Refusing to run: required core table "${table}" does not exist on the target ` +
          'database. The workspace\'s dedicated DB must already have the core AIQMS schema ' +
          'provisioned (this happens automatically when the workspace is set to dbStrategy=' +
          '"dedicated" during onboarding) before mwp-sync can run against it.',
      );
    }
  }

  const permissionGroupIds = Object.values(config.permissionGroupIdByCategory);
  const found = await sequelize.query<{ id: string }>(
    'SELECT id FROM permission_groups WHERE id = ANY(ARRAY[:ids]::uuid[])',
    { replacements: { ids: permissionGroupIds }, type: QueryTypes.SELECT },
  );
  const foundIds = new Set(found.map((row) => row.id));
  const missing = permissionGroupIds.filter((id) => !foundIds.has(id));
  if (missing.length > 0) {
    throw new Error(
      'Refusing to run: MWP_SYNC_PERMISSION_GROUP_IDS references permission_group id(s) not ' +
        `found in the target database: ${missing.join(', ')}. Seed these PermissionGroup rows ` +
        'in the workspace\'s dedicated DB before running mwp-sync.',
    );
  }
}

/**
 * Same fail-closed philosophy as assertTargetIsDedicatedWorkspaceDb, for the SECOND connection
 * this job opens — the control-plane DB where `users` rows actually live (shared by every
 * workspace/tenant on the platform, not just this one). Extra care here: a mistake on this
 * connection has blast radius beyond a single workspace.
 */
export async function assertControlPlaneReady(
  sequelize: Sequelize,
  config: MwpSyncConfig,
): Promise<void> {
  const expectedHost = process.env.MWP_SYNC_CONTROL_PLANE_EXPECTED_HOST;
  if (!expectedHost) {
    throw new Error(
      'Missing required environment variable: MWP_SYNC_CONTROL_PLANE_EXPECTED_HOST. Set it to ' +
        'the exact hostname of the identity-service control-plane database — this guard exists ' +
        'because CONTROL_PLANE_DATABASE_URL is shared by every workspace/tenant on the platform, ' +
        'not just this one.',
    );
  }

  const actualHost = new URL(config.controlPlaneDatabaseUrl).hostname;
  if (actualHost !== expectedHost) {
    throw new Error(
      `Refusing to run: CONTROL_PLANE_DATABASE_URL host "${actualHost}" does not match ` +
        `MWP_SYNC_CONTROL_PLANE_EXPECTED_HOST "${expectedHost}". Aborting before any read/write.`,
    );
  }

  const rows = await sequelize.query<{ exists: string | null }>(
    'SELECT to_regclass(:table) AS exists',
    { replacements: { table: 'public.users' }, type: QueryTypes.SELECT },
  );
  if (!rows[0]?.exists) {
    throw new Error(
      'Refusing to run: required table "users" does not exist on the control-plane database.',
    );
  }

  const workspace = await sequelize.query<{ id: string }>(
    'SELECT id FROM workspaces WHERE id = :workspaceId',
    { replacements: { workspaceId: config.workspaceId }, type: QueryTypes.SELECT },
  );
  if (workspace.length === 0) {
    throw new Error(
      `Refusing to run: no workspace row found in the control-plane database for id ` +
        `${config.workspaceId}. This job never creates a workspace itself — it must already be ` +
        'onboarded (real workspace record + dbStrategy) before mwp-sync can run.',
    );
  }
}
