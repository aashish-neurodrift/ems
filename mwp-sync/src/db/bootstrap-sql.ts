import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

import type { Sequelize } from 'sequelize';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const MIGRATION_PATH = path.join(__dirname, '..', '..', 'migrations', '001_mwp_sync_tables.sql');

/** Idempotent: CREATE TABLE IF NOT EXISTS only, safe to run on every startup. */
export async function bootstrapMwpSyncTables(sequelize: Sequelize): Promise<void> {
  const sql = readFileSync(MIGRATION_PATH, 'utf-8');
  await sequelize.query(sql);
}
