import { Client } from 'pg';

/**
 * Same interface as the distributedLock utility already used in
 * omind/backend/services/analytics-service (cron.schedule(...) -> distributedLock.runExclusive(...)).
 * Standalone has no Redis, so this implementation uses a Postgres advisory lock instead — swapping
 * to the real Redis-backed lock on port-in is a one-file change behind this same interface.
 */
export interface DistributedLock {
  runExclusive<T>(key: string, ttlMs: number, fn: () => Promise<T>): Promise<T | undefined>;
}

function lockKeyToInt(key: string): number {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash = (hash * 31 + key.charCodeAt(i)) | 0;
  }
  return hash;
}

/**
 * pg_try_advisory_lock/pg_advisory_unlock are SESSION-scoped: acquire and release must happen on
 * the exact same physical connection, or the unlock silently no-ops and the lock leaks until that
 * connection eventually closes. Sequelize's `sequelize.query()` borrows an arbitrary connection
 * from its pool (max 5, db/connection.ts) per call, so acquiring/releasing through it would not
 * reliably use the same connection. Using a dedicated `pg.Client`, opened just for the lock's
 * lifetime and independent of the Sequelize pool, guarantees that.
 */
export function createPostgresAdvisoryLock(databaseUrl: string): DistributedLock {
  return {
    async runExclusive<T>(key: string, _ttlMs: number, fn: () => Promise<T>): Promise<T | undefined> {
      const lockId = lockKeyToInt(key);
      const client = new Client({ connectionString: databaseUrl });
      await client.connect();

      try {
        const { rows } = await client.query<{ acquired: boolean }>(
          'SELECT pg_try_advisory_lock($1) AS acquired',
          [lockId],
        );
        if (!rows[0]?.acquired) {
          console.warn(`[mwp-sync] lock "${key}" already held elsewhere — skipping this run`);
          return undefined;
        }

        try {
          return await fn();
        } finally {
          await client.query('SELECT pg_advisory_unlock($1)', [lockId]);
        }
      } finally {
        await client.end();
      }
    },
  };
}
