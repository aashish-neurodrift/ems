-- Migration: 001_mwp_sync_tables
-- Additive only: creates 4 new tables owned by the MWP sync job.
-- Never alters users / workspace_nodes / node_assignments / role_assignments.
-- No DB-side UUID default (gen_random_uuid() needs pgcrypto/PG13+, not guaranteed available) —
-- every row is inserted through db/models.ts, whose Sequelize models already supply a UUIDV4
-- client-side for every insert.

CREATE TABLE IF NOT EXISTS mwp_employee_raw (
  fusion_id VARCHAR(64) PRIMARY KEY,
  raw_payload JSONB NOT NULL,
  synced_at TIMESTAMPTZ NOT NULL,
  sync_batch_id UUID NOT NULL
);

CREATE TABLE IF NOT EXISTS mwp_supervisor_history (
  id UUID PRIMARY KEY,
  user_id UUID NOT NULL,
  old_supervisor_id UUID,
  new_supervisor_id UUID,
  changed_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  sync_batch_id UUID NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_mwp_supervisor_history_user_id ON mwp_supervisor_history (user_id);

CREATE TABLE IF NOT EXISTS mwp_sync_runs (
  id UUID PRIMARY KEY,
  started_at TIMESTAMPTZ NOT NULL,
  finished_at TIMESTAMPTZ,
  status VARCHAR(16) NOT NULL DEFAULT 'running',
  added INTEGER NOT NULL DEFAULT 0,
  updated INTEGER NOT NULL DEFAULT 0,
  deactivated INTEGER NOT NULL DEFAULT 0,
  flagged INTEGER NOT NULL DEFAULT 0,
  error_count INTEGER NOT NULL DEFAULT 0,
  error_detail JSONB NOT NULL DEFAULT '[]'
);

CREATE TABLE IF NOT EXISTS mwp_manual_review_queue (
  id UUID PRIMARY KEY,
  fusion_id VARCHAR(64) NOT NULL,
  change_type VARCHAR(64) NOT NULL,
  before JSONB,
  after JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  resolved_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_mwp_manual_review_queue_unresolved
  ON mwp_manual_review_queue (fusion_id)
  WHERE resolved_at IS NULL;
