import 'dotenv/config';

export type Category = 'agent' | 'qa' | 'supervisor' | 'team_leader';

export interface MwpSyncConfig {
  mwpUrl: string;
  mwpClientKey: string;
  mwpApiToken: string;
  /** The workspace's dedicated tenant DB — WorkspaceNode/RoleAssignment/NodeAssignment (and this
   * job's own tables) live here. NOT where `users` rows go — see controlPlaneDatabaseUrl. */
  databaseUrl: string;
  /** The identity-service control-plane DB — `users` is control-plane data ALWAYS, regardless of
   * a workspace's dbStrategy (see AuthRepository/UserManagementRepository; both are fixed
   * singletons bound to this DB, never resolved per-tenant). Real login/the Users list only ever
   * read this database, so User rows MUST be created here, not in the dedicated DB. */
  controlPlaneDatabaseUrl: string;
  /** Fixed workspace all MWP-sourced users belong to. Fusion CX's own roster, not a customer workspace. */
  workspaceId: string;
  /** RoleAssignment.permissionGroupId is NOT NULL — one PermissionGroup id must already exist per category. */
  permissionGroupIdByCategory: Record<Category, string>;
  cronSchedule: string;
  lockTtlMs: number;
}

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function requireCategoryMap(name: string): Record<Category, string> {
  const raw = requireEnv(name);
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    throw new Error(`${name} must be valid JSON, e.g. {"agent":"<uuid>","qa":"<uuid>","supervisor":"<uuid>","team_leader":"<uuid>"}`);
  }
  const categories: Category[] = ['agent', 'qa', 'supervisor', 'team_leader'];
  const map = parsed as Record<string, string>;
  for (const category of categories) {
    if (!map[category]) {
      throw new Error(`${name} is missing an entry for category "${category}"`);
    }
  }
  return map as Record<Category, string>;
}

export function loadConfig(): MwpSyncConfig {
  return {
    mwpUrl: process.env.MWP_API_URL || 'https://mindwork.place/aiqmsapi/getmwpactiveuser',
    mwpClientKey: requireEnv('MWP_CLIENT_KEY'),
    mwpApiToken: requireEnv('MWP_API_TOKEN'),
    databaseUrl: requireEnv('DATABASE_URL'),
    controlPlaneDatabaseUrl: requireEnv('CONTROL_PLANE_DATABASE_URL'),
    workspaceId: requireEnv('MWP_SYNC_WORKSPACE_ID'),
    permissionGroupIdByCategory: requireCategoryMap('MWP_SYNC_PERMISSION_GROUP_IDS'),
    cronSchedule: process.env.MWP_SYNC_CRON_SCHEDULE || '0 2 * * *',
    lockTtlMs: Number(process.env.MWP_SYNC_LOCK_TTL_MS) || 30 * 60 * 1000,
  };
}
