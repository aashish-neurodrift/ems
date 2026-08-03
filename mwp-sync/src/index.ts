import cron from 'node-cron';

import { loadConfig } from './config.js';
import { createConnection } from './db/connection.js';
import { bootstrapMwpSyncTables } from './db/bootstrap-sql.js';
import { initControlPlaneModels, initTenantModels } from './db/models.js';
import { createPostgresAdvisoryLock } from './lock.js';
import { runSyncWithConnection } from './run.js';
import { assertControlPlaneReady, assertTargetIsDedicatedWorkspaceDb } from './preflight.js';

async function main(): Promise<void> {
  const config = loadConfig();
  const sequelize = createConnection(config.databaseUrl);
  const controlPlaneSequelize = createConnection(config.controlPlaneDatabaseUrl);
  await sequelize.authenticate();
  await assertTargetIsDedicatedWorkspaceDb(sequelize, config);
  await controlPlaneSequelize.authenticate();
  await assertControlPlaneReady(controlPlaneSequelize, config);
  await bootstrapMwpSyncTables(sequelize);
  const models = initTenantModels(sequelize);
  const controlPlaneModels = initControlPlaneModels(controlPlaneSequelize);
  const lock = createPostgresAdvisoryLock(config.databaseUrl);

  console.info(`[mwp-sync] scheduled "${config.cronSchedule}"`);

  cron.schedule(config.cronSchedule, () => {
    lock
      .runExclusive('mwp-sync', config.lockTtlMs, () =>
        runSyncWithConnection(controlPlaneSequelize, controlPlaneModels, sequelize, models, config),
      )
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
