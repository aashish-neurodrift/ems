import type { Transaction } from 'sequelize';

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
 * exactly, so a stored WorkspaceNode.path always matches this for the same inputs.
 */
export function buildExpectedProcessPath(officeName: string, client: string, process: string): string {
  const { geography, country } = resolveGeography(officeName);
  const location = officeName || 'Unknown';
  return `/${geography}/${country}/${location}/${client}/${process}`;
}

interface CachedNode {
  id: string;
  path: string;
}

/**
 * Resolves (creating if missing) the Geography -> Country -> Location -> Client -> Process
 * WorkspaceNode chain and returns the Process leaf's node id.
 *
 * One instance is shared across an entire applyDiff() run (constructed once in apply.ts, not
 * per user) so its cache actually memoizes across all ~13,835 employees sharing the same ~30
 * location / few-hundred client / few-hundred process branches, instead of every user
 * re-querying (or worse, racing to re-create) the same handful of nodes. The transaction is
 * passed per call, not held by the instance, because each user is still written in its own
 * transaction (so one user's failure/rollback doesn't touch another's) — sharing the cache
 * across transactions is safe because WorkspaceNode rows are append-only structural reference
 * data: once a node is committed by one user's transaction, it's immediately visible to the
 * next, so a cache hit correctly skips a redundant lookup rather than risking a duplicate row.
 */
export class NodeTreeResolver {
  private readonly cache = new Map<string, CachedNode>();

  constructor(
    private readonly models: MwpSyncModels,
    private readonly workspaceId: string,
  ) {}

  async resolveProcessLeaf(
    transaction: Transaction,
    officeName: string,
    client: string,
    process: string,
  ): Promise<string> {
    const { geography, country } = resolveGeography(officeName);
    const geographyNode = await this.resolveNode(transaction, null, 'geography', geography);
    const countryNode = await this.resolveNode(transaction, geographyNode, 'country', country);
    const locationNode = await this.resolveNode(transaction, countryNode, 'location', officeName || 'Unknown');
    const clientNode = await this.resolveNode(transaction, locationNode, 'client', client);
    const processNode = await this.resolveNode(transaction, clientNode, 'process', process);
    return processNode.id;
  }

  private async resolveNode(
    transaction: Transaction,
    parent: CachedNode | null,
    nodeType: string,
    name: string,
  ): Promise<CachedNode> {
    const cacheKey = `${parent?.id ?? 'root'}:${nodeType}:${name}`;
    const cached = this.cache.get(cacheKey);
    if (cached) return cached;

    const { WorkspaceNode } = this.models;
    const parentId = parent?.id ?? null;
    const existing = await WorkspaceNode.findOne({
      where: { workspaceId: this.workspaceId, parentId, nodeType, name },
      transaction,
    });
    if (existing) {
      const node: CachedNode = { id: existing.id, path: existing.path };
      this.cache.set(cacheKey, node);
      return node;
    }

    const parentPath = parent?.path ?? '';
    const created = await WorkspaceNode.create(
      {
        workspaceId: this.workspaceId,
        parentId,
        nodeType,
        name,
        path: `${parentPath}/${name}`,
      },
      { transaction },
    );
    const node: CachedNode = { id: created.id, path: created.path };
    this.cache.set(cacheKey, node);
    return node;
  }
}
