# mwp-sync — Code Walkthrough

Standalone TypeScript job that pulls Fusion CX's employee roster from MWP (`getmwpactiveuser`) daily and syncs it into AIQMS's `users`/`workspace_nodes`/`role_assignments`/`node_assignments` tables — incrementally, keyed by `fusion_id`, never a wipe-and-reload. Built to drop into `omind/backend/services/mwp-sync-service` later with minimal rework (see the plan this was built from, `~/.claude/plans/tranquil-conjuring-taco.md`, and `USER_MANAGEMENT.md`/`ORG_TREE.md` in the parent `EMS/` folder for the classification and tree design this code implements).

## File map

```
src/
  config.ts          env vars -> typed config, fails fast if anything required is missing
  mwp-client.ts       fetches + zod-validates the raw MWP response
  normalize.ts        raw record -> clean NormalizedEmployee (status, category, client/process pairs)
  tree.ts             Geography -> Country -> Location -> Client -> Process node resolver
  db/
    connection.ts     Postgres connection (mirrors omind's createPostgresClientFromUrl)
    models.ts         Sequelize models: 4 existing AIQMS tables (read/write) + 4 new sync-owned tables
    bootstrap-sql.ts   idempotent CREATE TABLE IF NOT EXISTS for the 4 new tables
  diff.ts             loads current DB state, compares against today's pull
  apply.ts            applies the diff to the DB per the condition table, one transaction per user
  lock.ts             cross-process mutual exclusion so two runs never overlap
  run.ts              orchestrates fetch -> normalize -> diff -> apply -> log (one function, two entrypoints)
  index.ts            cron entrypoint (long-lived process)
migrations/001_mwp_sync_tables.sql   the 4 new tables, plain SQL
```

## What happens on one run, in order

### 1. Entry

Two ways in, same core logic (`runSyncWithConnection` in `run.ts`):
- `npm run sync:once` → `run.ts`'s `main()` — opens a connection, runs once, closes it. For manual/testing use.
- `npm start` → `index.ts` — opens one long-lived connection at startup, then `node-cron` fires `runSyncWithConnection` on `config.cronSchedule` (default `0 2 * * *`, 2am daily), each fire wrapped in `lock.runExclusive('mwp-sync', ...)`.

The lock (`lock.ts`) matters because this is meant to eventually run as a real service — if a deploy restarts the process mid-run, or two instances briefly exist during a rollout, the lock (a Postgres advisory lock on a dedicated connection, not borrowed from the pool — see the code comment for why that distinction is load-bearing) makes sure only one sync actually executes at a time; the second caller just logs a skip and returns.

### 2. Fetch (Step 1 of the agreed Daily Sync Process)

`mwp-client.ts` POSTs to MWP with the two header keys, then runs the response through a `zod` schema before anything touches it — if MWP ever changes its shape, this fails loudly here rather than corrupting downstream data.

`run.ts` immediately persists every record into `mwp_employee_raw` (keyed by `fusion_id`, whole record as `jsonb`) via a **chunked** `bulkCreate` (500 rows at a time) before doing anything else. This is the "save the raw response as-is... keeps a rollback point" step from the plan — if diff/apply blows up, this run's exact input is already durably captured for replay or debugging, independent of whatever state the rest of the sync reached.

### 3. Normalize + classify (Step 2)

`normalize.ts` turns each raw record into a `NormalizedEmployee`:
- `status: "1"` → `active: true`, anything else → `false` (isolated in `isActiveStatus` — a one-line fix once MWP confirms what `"4"` means).
- `classify(dept_name, org_role)` → `'agent' | 'qa' | 'supervisor' | 'team_leader' | null`, using exactly the four rules established this session (Production Specialist+Operations, Quality Assurance+Quality Analyst, org_role=Supervisor, org_role=Team leader). `null` covers Executives/Managers/Directors/etc. — real employees, just outside the four tracked categories.
- `splitClientProcessPairs` — the one non-obvious part. `client_names`/`process_names` looked like two independent comma-lists at first, but real records like `client="AIFI,AIFI,AIFI,Leonardo Hotels,..."` / `process="AIFI OB,Reservation,ABB E-Mobility,AIFI OB,..."` turned out to be a flattened client×process cross-product — position `i` in one list pairs with position `i` in the other. Splitting them independently (which the earlier `tree_geo_country_location_client_process.json` in `EMS/` did) would silently cross-wire employees to the wrong client/process combination. This function zips by index and dedupes on the *pair*, never on either list alone.

`normalized` here is the **full** pull, unclassified records included — this matters for step 4.

### 4. Diff (Step 3)

`diff.ts` first loads every MWP-sourced `User` already in the target workspace (`loadCurrentState`), joined against their `RoleAssignment` (for `supervisorId`) and active `NodeAssignment` → `WorkspaceNode.path` (for their current client/process placement). Then `diff()` walks today's normalized pull against that snapshot:

| Situation | Bucket |
|---|---|
| `fusion_id` not in DB, has a category | `newHires` |
| `fusion_id` not in DB, no category | skipped entirely (`unclassifiedNewSkipped`) — never auto-created |
| `fusion_id` in DB, absent from today's *entire* pull (classified or not) | `removed` |
| `fusion_id` in both, some field differs | `changed`, with per-field flags (`statusChanged`, `categoryChanged`, `supervisorChanged`, `nodeChanged`, `emailChanged`) |
| `fusion_id` in both, nothing differs | counted, not written |

The classified-vs-full distinction here is the fix for a bug we caught mid-build: if you filter to classified-only *before* diffing, an existing tracked employee whose new pull no longer matches any of the four category rules (e.g. promoted from agent to Manager) simply disappears from the incoming set — and the removal check can't tell that apart from the person actually leaving MWP. It would have been soft-deactivated as if they'd quit. Diffing against the full pull and only skipping *brand-new* unclassified people avoids that: `categoryChanged` correctly fires (role → null) and the person is routed to manual review instead of deactivation.

`nodeChanged` is computed without touching the DB: `buildExpectedProcessPath` (in `tree.ts`) rebuilds the path string a person's incoming client/process pairs *would* resolve to, and compares it against their currently-assigned `WorkspaceNode.path` values already loaded from the DB. Only if apply actually needs to create/move nodes does it touch the tree tables.

### 5. Apply (Step 4 — the condition table)

`apply.ts` runs in three passes:

**Pass 1 — new hires.** For each classified new hire: create the `User` row (placeholder credentials — `blocked: true`, random unusable `passwordHash`, `mustChangePassword: true` — real onboarding/invite is a separate, out-of-scope flow), create their `RoleAssignment` (using the category → `permissionGroupId` mapping from config), and resolve/create their Geography→Country→Location→Client→Process node chain via a **shared** `NodeTreeResolver` (one instance for the whole run, not one per user — otherwise 12,661 agents would each separately re-query/re-create the same handful of location and client nodes). Supervisor linking is deliberately deferred to Pass 2.

**Pass 2 — new-hire supervisor resolution.** Run separately because a new hire's supervisor might be *another* new hire in the same daily batch (e.g. a new team onboarded together) — that supervisor's internal `User.id` doesn't exist until Pass 1 finishes creating everyone. `batchUserIdByFusionId` accumulates every ID created in Pass 1 (seeded from the DB snapshot), so by Pass 2 every fusion_id in this run — old or new — resolves to a real internal ID (or is logged as an orphaned reference and left unresolved, matching MWP's own ~12 dangling-supervisor-reference cases noted in the earlier data-quality pass).

**Pass 3 — changed users**, one Postgres transaction per person:
- `statusChanged`/`emailChanged` → direct `User` field update.
- `nodeChanged` → revoke the old `NodeAssignment` rows, resolve/create the new client/process leaf, assign.
- `supervisorChanged` → **always applied**, and always written to `mwp_supervisor_history` first. This is the concrete answer to "supervisors may rotate": rotation isn't special-cased or debounced — MWP is the source of truth for who supervises whom *today*, so every change is applied immediately, and the history table absorbs the audit trail (a rotation reverting next month is just another history row, never blocked, never routed to manual review).
- `categoryChanged` → **never auto-applied**. Written to `mwp_manual_review_queue` instead, `User.role` left untouched — this is what stops MWP's single-role view from silently overwriting a role an admin added manually inside AIQMS.

**Removed** (true absence from the whole feed): soft `User.active = false`, never a delete — history stays intact.

Every add/update/deactivate/flag is counted and rolled up into one `mwp_sync_runs` row (`started_at`/`finished_at`/`status`/counts/`error_detail`) — the answer to "why did this user's supervisor change last Tuesday" without re-diffing raw API dumps.

## How this maps back to the original requirements

- **"Daily runnable job"** → `index.ts` + `node-cron`, one schedule, wrapped in a cross-process lock.
- **"Pull data from api"** → `mwp-client.ts`, schema-validated.
- **"Filter them with our desired condition"** → `normalize.ts`'s `classify()`, the exact agent/qa/supervisor/team_leader rules from `USER_MANAGEMENT.md`.
- **"Find the difference... compare them"** → `diff.ts`, keyed by `fusion_id`.
- **"Make update into database accordingly, no need to wipe whole data and reentries"** → `apply.ts`'s per-field condition table; nothing is ever bulk-deleted/recreated, only the fields that actually changed are touched, in a per-user transaction.
- **"Supervisor l1_supervisor_name may rotate"** → handled structurally in Pass 3 + `mwp_supervisor_history`, described above — not a special case, a designed-in property of how supervisor changes are always applied and always logged.

## What's verified vs. not

Verified without a database: `tsc --noEmit` clean; `classify()`/`splitClientProcessPairs()` run against the real 15,339-record snapshot reproduce the exact category counts from `user_requirements.json` (agent 12,661 / qa 267 / supervisor 272 / team_leader 635); 6 targeted scenarios against `diff()` covering the category-drop bug fix, true removal, unclassified-new-hire skipping, supervisor-cleared-to-null, and no-op stability.

Not yet verified: actual writes against a live Postgres (transactions, the advisory lock under real concurrency, `RoleAssignment`/`WorkspaceNode` constraints) — deferred per your request. Before a real run, the three prerequisites called out in code comments still need answers: `MWP_SYNC_WORKSPACE_ID`, a seeded `PermissionGroup` row per category, and MWP confirming what `status: "4"` means.
