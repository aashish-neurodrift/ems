import {
  DataTypes,
  Model,
  type CreationOptional,
  type InferAttributes,
  type InferCreationAttributes,
  type Sequelize,
} from 'sequelize';

/**
 * Column names/types below mirror omind/backend/packages/database/src/models/identity/identity-models.ts
 * exactly for User, WorkspaceNode, NodeAssignment, RoleAssignment (tableName + underscored columns) so
 * this can read/write the *same* tables in a shared Postgres instance, and porting into @company/database
 * later means deleting these four classes in favor of the real import — not a schema change.
 *
 * 'SUPERVISOR' / 'TEAM_LEADER' are not yet in identity-models.ts's UserRole union. The `role` column is
 * VARCHAR(32) with no DB check constraint, so writing these strings is safe today; add them to the TS
 * union in identity-models.ts when this ports in.
 */
export type UserRole =
  | 'SUPER_ADMIN'
  | 'WORKSPACE_ADMIN'
  | 'MANAGER'
  | 'QA_MANAGER'
  | 'QA'
  | 'AGENT'
  | 'SUPERVISOR'
  | 'TEAM_LEADER';

export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: CreationOptional<string>;
  declare workspaceId: string;
  declare email: string | null;
  declare employeeId: string | null;
  declare username: string;
  declare displayName: string;
  declare passwordHash: string;
  declare blocked: CreationOptional<boolean>;
  declare active: CreationOptional<boolean>;
  declare role: CreationOptional<UserRole>;
  declare roles: CreationOptional<UserRole[]>;
  declare mustChangePassword: CreationOptional<boolean>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

export class WorkspaceNode extends Model<
  InferAttributes<WorkspaceNode>,
  InferCreationAttributes<WorkspaceNode>
> {
  declare id: CreationOptional<string>;
  declare workspaceId: string;
  declare parentId: string | null;
  declare name: string;
  declare nodeType: CreationOptional<string | null>;
  declare path: string;
  declare active: CreationOptional<boolean>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

export class NodeAssignment extends Model<
  InferAttributes<NodeAssignment>,
  InferCreationAttributes<NodeAssignment>
> {
  declare id: CreationOptional<string>;
  declare userId: string;
  declare nodeId: string;
  declare status: CreationOptional<'active' | 'revoked'>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

export class RoleAssignment extends Model<
  InferAttributes<RoleAssignment>,
  InferCreationAttributes<RoleAssignment>
> {
  declare id: CreationOptional<string>;
  declare userId: string;
  declare workspaceId: string;
  declare nodeId: CreationOptional<string | null>;
  declare permissionGroupId: string;
  declare supervisorId: CreationOptional<string | null>;
  declare status: CreationOptional<'active' | 'disabled'>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

// --- New tables, owned entirely by this job (see migrations/001_mwp_sync_tables.sql) ---

export class MwpEmployeeRaw extends Model<
  InferAttributes<MwpEmployeeRaw>,
  InferCreationAttributes<MwpEmployeeRaw>
> {
  declare fusionId: string;
  declare rawPayload: Record<string, unknown>;
  declare syncedAt: Date;
  declare syncBatchId: string;
}

export class MwpSupervisorHistory extends Model<
  InferAttributes<MwpSupervisorHistory>,
  InferCreationAttributes<MwpSupervisorHistory>
> {
  declare id: CreationOptional<string>;
  declare userId: string;
  declare oldSupervisorId: string | null;
  declare newSupervisorId: string | null;
  declare changedAt: CreationOptional<Date>;
  declare syncBatchId: string;
}

export class MwpSyncRun extends Model<
  InferAttributes<MwpSyncRun>,
  InferCreationAttributes<MwpSyncRun>
> {
  declare id: CreationOptional<string>;
  declare startedAt: Date;
  declare finishedAt: Date | null;
  declare status: CreationOptional<'running' | 'success' | 'failed'>;
  declare added: CreationOptional<number>;
  declare updated: CreationOptional<number>;
  declare deactivated: CreationOptional<number>;
  declare flagged: CreationOptional<number>;
  declare errorCount: CreationOptional<number>;
  declare errorDetail: CreationOptional<Record<string, unknown>[]>;
}

export class MwpManualReviewQueue extends Model<
  InferAttributes<MwpManualReviewQueue>,
  InferCreationAttributes<MwpManualReviewQueue>
> {
  declare id: CreationOptional<string>;
  declare fusionId: string;
  declare changeType: string;
  declare before: Record<string, unknown> | null;
  declare after: Record<string, unknown> | null;
  declare createdAt: CreationOptional<Date>;
  declare resolvedAt: Date | null;
}

export interface MwpSyncModels {
  User: typeof User;
  WorkspaceNode: typeof WorkspaceNode;
  NodeAssignment: typeof NodeAssignment;
  RoleAssignment: typeof RoleAssignment;
  MwpEmployeeRaw: typeof MwpEmployeeRaw;
  MwpSupervisorHistory: typeof MwpSupervisorHistory;
  MwpSyncRun: typeof MwpSyncRun;
  MwpManualReviewQueue: typeof MwpManualReviewQueue;
}

export function initModels(sequelize: Sequelize): MwpSyncModels {
  User.init(
    {
      id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
      workspaceId: { type: DataTypes.UUID, allowNull: false },
      email: { type: DataTypes.STRING(255), allowNull: true },
      employeeId: { type: DataTypes.STRING(120), allowNull: true },
      username: { type: DataTypes.STRING(80), allowNull: false },
      displayName: { type: DataTypes.STRING(160), allowNull: false },
      passwordHash: { type: DataTypes.TEXT, allowNull: false },
      blocked: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
      active: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
      role: { type: DataTypes.STRING(32), allowNull: false, defaultValue: 'AGENT' },
      roles: { type: DataTypes.ARRAY(DataTypes.TEXT), allowNull: false, defaultValue: ['AGENT'] },
      mustChangePassword: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    { sequelize, tableName: 'users' },
  );

  WorkspaceNode.init(
    {
      id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
      workspaceId: { type: DataTypes.UUID, allowNull: false },
      parentId: { type: DataTypes.UUID, allowNull: true },
      name: { type: DataTypes.STRING(160), allowNull: false },
      nodeType: { type: DataTypes.STRING(80), allowNull: true },
      path: { type: DataTypes.STRING(1000), allowNull: false },
      active: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    { sequelize, tableName: 'workspace_nodes' },
  );

  NodeAssignment.init(
    {
      id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
      userId: { type: DataTypes.UUID, allowNull: false },
      nodeId: { type: DataTypes.UUID, allowNull: false },
      status: { type: DataTypes.STRING(32), allowNull: false, defaultValue: 'active' },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    { sequelize, tableName: 'node_assignments' },
  );

  RoleAssignment.init(
    {
      id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
      userId: { type: DataTypes.UUID, allowNull: false },
      workspaceId: { type: DataTypes.UUID, allowNull: false },
      nodeId: { type: DataTypes.UUID, allowNull: true },
      permissionGroupId: { type: DataTypes.UUID, allowNull: false },
      supervisorId: { type: DataTypes.UUID, allowNull: true },
      status: { type: DataTypes.STRING(32), allowNull: false, defaultValue: 'active' },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    { sequelize, tableName: 'role_assignments' },
  );

  MwpEmployeeRaw.init(
    {
      fusionId: { type: DataTypes.STRING(64), primaryKey: true },
      rawPayload: { type: DataTypes.JSONB, allowNull: false },
      syncedAt: { type: DataTypes.DATE, allowNull: false },
      syncBatchId: { type: DataTypes.UUID, allowNull: false },
    },
    { sequelize, tableName: 'mwp_employee_raw', timestamps: false },
  );

  MwpSupervisorHistory.init(
    {
      id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
      userId: { type: DataTypes.UUID, allowNull: false },
      oldSupervisorId: { type: DataTypes.UUID, allowNull: true },
      newSupervisorId: { type: DataTypes.UUID, allowNull: true },
      changedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
      syncBatchId: { type: DataTypes.UUID, allowNull: false },
    },
    { sequelize, tableName: 'mwp_supervisor_history', timestamps: false },
  );

  MwpSyncRun.init(
    {
      id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
      startedAt: { type: DataTypes.DATE, allowNull: false },
      finishedAt: { type: DataTypes.DATE, allowNull: true },
      status: { type: DataTypes.STRING(16), allowNull: false, defaultValue: 'running' },
      added: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
      updated: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
      deactivated: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
      flagged: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
      errorCount: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
      errorDetail: { type: DataTypes.JSONB, allowNull: false, defaultValue: [] },
    },
    { sequelize, tableName: 'mwp_sync_runs', timestamps: false },
  );

  MwpManualReviewQueue.init(
    {
      id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
      fusionId: { type: DataTypes.STRING(64), allowNull: false },
      changeType: { type: DataTypes.STRING(64), allowNull: false },
      before: { type: DataTypes.JSONB, allowNull: true },
      after: { type: DataTypes.JSONB, allowNull: true },
      createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
      resolvedAt: { type: DataTypes.DATE, allowNull: true },
    },
    { sequelize, tableName: 'mwp_manual_review_queue', timestamps: false },
  );

  return {
    User,
    WorkspaceNode,
    NodeAssignment,
    RoleAssignment,
    MwpEmployeeRaw,
    MwpSupervisorHistory,
    MwpSyncRun,
    MwpManualReviewQueue,
  };
}
