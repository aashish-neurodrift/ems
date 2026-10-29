import { randomUUID } from 'node:crypto';
import { pathToFileURL } from 'node:url';

import type { Sequelize } from 'sequelize';

import { loadConfig, type MwpSyncConfig } from './config.js';
import { createConnection } from './db/connection.js';
import { bootstrapMwpSyncTables } from './db/bootstrap-sql.js';
import { initControlPlaneModels, initTenantModels, type ControlPlaneModels, type MwpSyncModels } from './db/models.js';
import { fetchMwpActiveUsers } from './mwp-client.js';
import { normalizeRecord } from './normalize.js';
import { loadCurrentState, diff } from './diff.js';
import { applyDiff } from './apply.js';
import { assertControlPlaneReady, assertTargetIsDedicatedWorkspaceDb } from './preflight.js';
import { getWorkspaceRootNode } from './tree.js';

export interface RunSummary {
  syncBatchId: string;
  totalFetched: number;
  unclassifiedSkipped: number;
  added: number;
  updated: number;
  deactivated: number;
  flagged: number;
  warnings: string[];
  errors: { fusionId: string; message: string }[];
}

/** Core sync logic, reusable across a one-shot CLI run and a long-lived cron process.
 * Two separate database connections: `sequelize`/`models` is the workspace's tenant (dedicated
 * or shard) DB; `controlPlaneSequelize`/`controlPlaneModels` is identity-service's control-plane
 * DB, where `users` rows actually live (see db/models.ts's initControlPlaneModels docstring). */
export async function runSyncWithConnection(
  controlPlaneSequelize: Sequelize,
  controlPlaneModels: ControlPlaneModels,
  sequelize: Sequelize,
  models: MwpSyncModels,
  config: MwpSyncConfig,
): Promise<RunSummary> {
  const syncBatchId = randomUUID();
  const startedAt = new Date();
  await models.MwpSyncRun.create({ id: syncBatchId, startedAt, status: 'running' });

  try {
    // Step 1 — fetch, save raw response as-is before touching anything (rollback point).
    // Chunked bulkCreate, not one upsert() per record — the pool is capped at 5 connections
    // (db/connection.ts), so firing ~15k concurrent upserts via Promise.all would massively
    // overrun it and risk acquire-timeout failures instead of just being slow.
    const response = await fetchMwpActiveUsers(config);
    const syncedAt = new Date();
    const RAW_UPSERT_CHUNK_SIZE = 500;
    for (let i = 0; i < response.data.length; i += RAW_UPSERT_CHUNK_SIZE) {
      const chunk = response.data.slice(i, i + RAW_UPSERT_CHUNK_SIZE).map((record) => ({
        fusionId: record.fusion_id.trim(),
        rawPayload: record,
        syncedAt,
        syncBatchId,
      }));
      await models.MwpEmployeeRaw.bulkCreate(chunk, {
        updateOnDuplicate: ['rawPayload', 'syncedAt', 'syncBatchId'],
      });
    }

    // Step 2 — classify. `normalized` (the FULL pull, unclassified records included) is what
    // diff() must see — do not pre-filter here. An existing tracked user whose category legitimately
    // drops to null (e.g. promoted out of scope) has to be visible to diff() as a category change,
    // not silently disappear from the incoming set and get misread as having left the company.
    // Employees classify() can't place (Executives, Managers, Directors, ...) are still captured in
    // mwp_employee_raw above; brand-new ones are skipped (see diff.ts), never auto-created as Users.
    const normalized = response.data.map(normalizeRecord);

    // Step 3 — diff against local DB, keyed by fusion_id (= employeeId). The Geography tree
    // nests under the workspace's existing root node (getWorkspaceRootNode), never under a node
    // this job creates itself.
    const root = await getWorkspaceRootNode(models, config.workspaceId);
    const currentByEmployeeId = await loadCurrentState(models, controlPlaneModels, config.workspaceId);
    const diffResult = diff(currentByEmployeeId, normalized, root.path, config.permissionGroupIdByCategory);

    // Step 4 — apply per the condition table.
    const applyResult = await applyDiff(
      controlPlaneSequelize,
      controlPlaneModels,
      sequelize,
      models,
      config,
      diffResult,
      syncBatchId,
      root,
    );

    await models.MwpSyncRun.update(
      {
        finishedAt: new Date(),
        status: applyResult.errors.length > 0 ? 'failed' : 'success',
        added: applyResult.added,
        updated: applyResult.updated,
        deactivated: applyResult.deactivated,
        flagged: applyResult.flagged,
        errorCount: applyResult.errors.length,
        errorDetail: applyResult.errors,
      },
      { where: { id: syncBatchId } },
    );

    return {
      syncBatchId,
      totalFetched: response.data.length,
      unclassifiedSkipped: diffResult.unclassifiedNewSkipped,
      added: applyResult.added,
      updated: applyResult.updated,
      deactivated: applyResult.deactivated,
      flagged: applyResult.flagged,
      warnings: applyResult.warnings,
      errors: applyResult.errors,
    };
  } catch (error) {
    await models.MwpSyncRun.update(
      {
        finishedAt: new Date(),
        status: 'failed',
        errorCount: 1,
        errorDetail: [{ message: (error as Error).message }],
      },
      { where: { id: syncBatchId } },
    );
    throw error;
  }
}

/** CLI entrypoint for a single manual run: `npm run sync:once`. Opens exactly two connections —
 * the workspace's tenant DB and the shared control-plane DB — both verified by their own
 * fail-closed preflight check before anything is read or written. */
async function main(): Promise<void> {
  const config = loadConfig();
  const sequelize = createConnection(config.databaseUrl);
  const controlPlaneSequelize = createConnection(config.controlPlaneDatabaseUrl);
  try {
    await sequelize.authenticate();
    await assertTargetIsDedicatedWorkspaceDb(sequelize, config);
    await controlPlaneSequelize.authenticate();
    await assertControlPlaneReady(controlPlaneSequelize, config);
    await bootstrapMwpSyncTables(sequelize);
    const models = initTenantModels(sequelize);
    const controlPlaneModels = initControlPlaneModels(controlPlaneSequelize);
    const summary = await runSyncWithConnection(
      controlPlaneSequelize,
      controlPlaneModels,
      sequelize,
      models,
      config,
    );
    console.info('[mwp-sync] run complete', summary);
  } finally {
    await sequelize.close();
    await controlPlaneSequelize.close();
  }
}

const isMain = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
if (isMain) {
  main().catch((error) => {
    console.error('[mwp-sync] run failed', error);
    process.exitCode = 1;
  });
}
