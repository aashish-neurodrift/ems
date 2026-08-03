import { randomUUID } from 'node:crypto';

import { Op, type Transaction } from 'sequelize';

import type { MwpSyncModels } from './db/models.js';

/**
 * MWP's raw payload only returns office_name (city)/office_id — there is no raw Geo/Country
 * field. This mapping is derived by us from the 27 real-world cities observed in the feed (see
 * USER_MANAGEMENT.md). If MWP's actual Geo/Country enrichment fields (available on request)
 * differ, rebuild this table from those instead.
 */
const COUNTRY_BY_CITY: Record<string, string> = {
  Tirana: 'Albania',
  Bengaluru: 'India',
  'Belize City': 'Belize',
  'Orange Walk': 'Belize',
  'San Ignacio': 'Belize',
  Casablanca: 'Morocco',
  Cebu: 'Philippines',
  Chandigarh: 'India',
  Medellin: 'Colombia',
  Durgapur: 'India',
  'San Salvador': 'El Salvador',
  Boca: 'USA',
  Gurugram: 'India',
  Houston: 'USA',
  Howrah: 'India',
  Kingston: 'Jamaica',
  Kalyani: 'India',
  Kolkata: 'India',
  Prishtine: 'Kosovo',
  Legazpi: 'Philippines',
  Manila: 'Philippines',
  Montreal: 'Canada',
  Mumbai: 'India',
  Noida: 'India',
  Siliguri: 'India',
  Silang: 'Philippines',
  Spindale: 'USA',
  Draper: 'USA',
  'Puerto Vallarta': 'Mexico',
  Atlanta: 'USA',
};

const GEOGRAPHY_BY_COUNTRY: Record<string, string> = {
  India: 'APAC',
  Philippines: 'APAC',
  Belize: 'LATAM',
  'El Salvador': 'LATAM',
  Colombia: 'LATAM',
  Mexico: 'LATAM',
  Jamaica: 'LATAM',
  USA: 'NORAM',
  Canada: 'NORAM',
  Albania: 'EMEA',
  Morocco: 'EMEA',
  Kosovo: 'EMEA',
};

export function resolveGeography(officeName: string): { geography: string; country: string } {
  const country = COUNTRY_BY_CITY[officeName] ?? 'Unknown';
  const geography = GEOGRAPHY_BY_COUNTRY[country] ?? 'Unknown';
  return { geography, country };
}

/**
 * Pure path builder used by diff.ts to detect a client/process change without touching the DB
 * (no node creation during diffing). Mirrors NodeTreeResolver's incremental path construction
 * exactly, so a stored WorkspaceNode.path always matches this for the same inputs. `rootPath` is
 * the existing workspace root WorkspaceNode's own `path` column (see getWorkspaceRootNode) — the
 * Geography level nests under it rather than sitting at parentId=null itself.
 */
export function buildExpectedProcessPath(
  rootPath: string,
  officeName: string,
  client: string,
  process: string,
): string {
  const { geography, country } = resolveGeography(officeName);
  const location = officeName || 'Unknown';
  return `${rootPath}/${geography}/${country}/${location}/${client}/${process}`;
}

interface CachedNode {
  id: string;
  path: string;
}

export type RootNode = CachedNode;

/**
 * The workspace's own root WorkspaceNode (nodeType="workspace", parentId=null) — created once,
 * outside this job, when the workspace itself was onboarded. mwp-sync nests the Geography tree
 * under it and never creates a root of its own; if it's missing, something is wrong with the
 * workspace's provisioning and this job must not paper over that by inventing one.
 */
export async function getWorkspaceRootNode(
  models: MwpSyncModels,
  workspaceId: string,
): Promise<CachedNode> {
  const root = await models.WorkspaceNode.findOne({
    where: { workspaceId, parentId: null, nodeType: 'workspace' },
  });
  if (!root) {
    throw new Error(
      `No root WorkspaceNode (nodeType="workspace", parentId=null) found for workspace ` +
        `${workspaceId}. mwp-sync nests the Geography tree under the workspace's existing root ` +
        'node and never creates one itself.',
    );
  }
  return { id: root.id, path: root.path };
}

export interface TreeRequest {
  officeName: string;
  client: string;
  process: string;
}

function tripletKey(officeName: string, client: string, process: string): string {
  return `${officeName}||${client}||${process}`;
}

interface LevelWant {
  parentId: string;
  parentPath: string;
  name: string;
}

/**
 * Resolves (creating if missing) every distinct (parentId, name) pair for ONE tree level in a
 * fixed number of round trips — one SELECT covering every wanted parent, then one bulkCreate for
 * whatever's actually missing — instead of one SELECT+INSERT pair per row. This is the building
 * block that makes buildTreeForRequests cost "a few queries per level" rather than "a few
 * queries per employee".
 */
async function ensureLevel(
  models: MwpSyncModels,
  workspaceId: string,
  transaction: Transaction,
  nodeType: string,
  wanted: LevelWant[],
): Promise<Map<string, CachedNode>> {
  const dedupedByKey = new Map<string, LevelWant>();
  for (const want of wanted) {
    dedupedByKey.set(`${want.parentId}:${want.name}`, want);
  }
  const list = [...dedupedByKey.values()];
  if (list.length === 0) return new Map();

  const { WorkspaceNode } = models;
  const parentIds = [...new Set(list.map((w) => w.parentId))];
  const existingRows = await WorkspaceNode.findAll({
    where: { workspaceId, nodeType, parentId: { [Op.in]: parentIds } },
    transaction,
  });

  const resultMap = new Map<string, CachedNode>();
  for (const row of existingRows) {
    resultMap.set(`${row.parentId}:${row.name}`, { id: row.id, path: row.path });
  }

  const missing = list.filter((w) => !resultMap.has(`${w.parentId}:${w.name}`));
  if (missing.length > 0) {
    const rows = missing.map((w) => ({
      id: randomUUID(),
      workspaceId,
      parentId: w.parentId,
      nodeType,
      name: w.name,
      path: `${w.parentPath}/${w.name}`,
    }));
    await WorkspaceNode.bulkCreate(rows, { transaction });
    for (const row of rows) {
      resultMap.set(`${row.parentId}:${row.name}`, { id: row.id, path: row.path });
    }
  }
  return resultMap;
}

/**
 * Resolves the ENTIRE Geography -> Country -> Location -> Client -> Process tree needed for a
 * whole batch of employees in ONE call, level by level, instead of one resolveProcessLeaf-style
 * round trip per employee. Distinct (officeName, client, process) triplets across ~13,835
 * employees collapse to a few hundred at most (27 cities, 359 clients, 561 processes) — resolving
 * them level-by-level costs 5 SELECTs + up to 5 bulkCreates total, not thousands of individual
 * lookups. Returns a map from the same triplet key back to the Process leaf's node id.
 */
export async function buildTreeForRequests(
  models: MwpSyncModels,
  workspaceId: string,
  transaction: Transaction,
  root: RootNode,
  requests: TreeRequest[],
): Promise<Map<string, string>> {
  const uniqueByKey = new Map<string, TreeRequest>();
  for (const request of requests) {
    uniqueByKey.set(tripletKey(request.officeName, request.client, request.process), request);
  }
  const unique = [...uniqueByKey.values()];
  if (unique.length === 0) return new Map();

  const geoMap = await ensureLevel(
    models,
    workspaceId,
    transaction,
    'Geography',
    unique.map((r) => ({ parentId: root.id, parentPath: root.path, name: resolveGeography(r.officeName).geography })),
  );

  const countryMap = await ensureLevel(
    models,
    workspaceId,
    transaction,
    'Country',
    unique.map((r) => {
      const { geography, country } = resolveGeography(r.officeName);
      const geoNode = geoMap.get(`${root.id}:${geography}`)!;
      return { parentId: geoNode.id, parentPath: geoNode.path, name: country };
    }),
  );

  const locationMap = await ensureLevel(
    models,
    workspaceId,
    transaction,
    'Location',
    unique.map((r) => {
      const { geography, country } = resolveGeography(r.officeName);
      const geoNode = geoMap.get(`${root.id}:${geography}`)!;
      const countryNode = countryMap.get(`${geoNode.id}:${country}`)!;
      return { parentId: countryNode.id, parentPath: countryNode.path, name: r.officeName || 'Unknown' };
    }),
  );

  const clientMap = await ensureLevel(
    models,
    workspaceId,
    transaction,
    'Client',
    unique.map((r) => {
      const { geography, country } = resolveGeography(r.officeName);
      const geoNode = geoMap.get(`${root.id}:${geography}`)!;
      const countryNode = countryMap.get(`${geoNode.id}:${country}`)!;
      const locationNode = locationMap.get(`${countryNode.id}:${r.officeName || 'Unknown'}`)!;
      return { parentId: locationNode.id, parentPath: locationNode.path, name: r.client };
    }),
  );

  const processMap = await ensureLevel(
    models,
    workspaceId,
    transaction,
    'Process',
    unique.map((r) => {
      const { geography, country } = resolveGeography(r.officeName);
      const geoNode = geoMap.get(`${root.id}:${geography}`)!;
      const countryNode = countryMap.get(`${geoNode.id}:${country}`)!;
      const locationNode = locationMap.get(`${countryNode.id}:${r.officeName || 'Unknown'}`)!;
      const clientNode = clientMap.get(`${locationNode.id}:${r.client}`)!;
      return { parentId: clientNode.id, parentPath: clientNode.path, name: r.process };
    }),
  );

  const result = new Map<string, string>();
  for (const request of unique) {
    const { geography, country } = resolveGeography(request.officeName);
    const geoNode = geoMap.get(`${root.id}:${geography}`)!;
    const countryNode = countryMap.get(`${geoNode.id}:${country}`)!;
    const locationNode = locationMap.get(`${countryNode.id}:${request.officeName || 'Unknown'}`)!;
    const clientNode = clientMap.get(`${locationNode.id}:${request.client}`)!;
    const processNode = processMap.get(`${clientNode.id}:${request.process}`)!;
    result.set(tripletKey(request.officeName, request.client, request.process), processNode.id);
  }
  return result;
}
