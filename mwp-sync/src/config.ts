import 'dotenv/config';

export type Category = 'agent' | 'qa' | 'supervisor' | 'team_leader';

export interface MwpSyncConfig {
  mwpUrl: string;
  mwpClientKey: string;
  mwpApiToken: string;
  databaseUrl: string;
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
    workspaceId: requireEnv('MWP_SYNC_WORKSPACE_ID'),
    permissionGroupIdByCategory: requireCategoryMap('MWP_SYNC_PERMISSION_GROUP_IDS'),
    cronSchedule: process.env.MWP_SYNC_CRON_SCHEDULE || '0 2 * * *',
    lockTtlMs: Number(process.env.MWP_SYNC_LOCK_TTL_MS) || 30 * 60 * 1000,
  };
}
