import cron from 'node-cron';

import { loadConfig } from './config.js';
import { createConnection } from './db/connection.js';
import { bootstrapMwpSyncTables } from './db/bootstrap-sql.js';
import { initModels } from './db/models.js';
import { createPostgresAdvisoryLock } from './lock.js';
import { runSyncWithConnection } from './run.js';

async function main(): Promise<void> {
  const config = loadConfig();
  const sequelize = createConnection(config.databaseUrl);
  await sequelize.authenticate();
  await bootstrapMwpSyncTables(sequelize);
  const models = initModels(sequelize);
  const lock = createPostgresAdvisoryLock(config.databaseUrl);

  console.info(`[mwp-sync] scheduled "${config.cronSchedule}"`);

  cron.schedule(config.cronSchedule, () => {
    lock
      .runExclusive('mwp-sync', config.lockTtlMs, () => runSyncWithConnection(sequelize, models, config))
      .then((summary) => {
        if (summary) console.info('[mwp-sync] run complete', summary);
      })
      .catch((error: unknown) => console.error('[mwp-sync] run failed', error));
  });
}

main().catch((error) => {
  console.error('[mwp-sync] failed to start', error);
  process.exitCode = 1;
});
