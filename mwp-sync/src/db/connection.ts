import { Sequelize } from 'sequelize';

/**
 * Mirrors omind/backend/packages/database/src/postgres.ts (createPostgresClientFromUrl) so
 * porting this job into @company/database later is an import swap, not a rewrite.
 */
export function createConnection(databaseUrl: string): Sequelize {
  const useSsl = databaseUrl.includes('sslmode=require') || process.env.POSTGRES_SSL === 'true';

  return new Sequelize(databaseUrl, {
    dialect: 'postgres',
    logging: false,
    pool: { max: 5, min: 0, acquire: 30_000, idle: 10_000 },
    define: { underscored: true, timestamps: true },
    dialectOptions: {
      connectionTimeoutMillis: 10_000,
      application_name: 'mwp-sync',
      ...(useSsl ? { ssl: { require: true, rejectUnauthorized: false } } : {}),
    },
  });
}
