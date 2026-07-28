# User Management — MWP → AIQMS Sync

Source: `POST /aiqmsapi/getmwpactiveuser` (MWP). Snapshot in this folder: [mwp_active_users.json](mwp_active_users.json) (15,339 records, pulled 2026-07-28).

Designation is not used for classification — MWP has 127 distinct designations, too many "fancy titles" to key off directly. Every category below is filtered on `dept_name` + `org_role` only.

## Category 1 — Agents

**Rule:** `org_role = Production Specialist` AND `dept_name = Operations`

**File:** [dept_operations.json](dept_operations.json) — 12,661 records

Covers 14 different designations underneath one org_role (Customer Service Associate, Apprentice, Medical Officer, Field Executive, GIG-Worker, SME, etc.) — this is the case the rule is designed to solve. 27 other Production Specialists sit outside Operations (DUS Utility, Administration, HR, Finance, Marketing) and are intentionally excluded — they carry the title but aren't floor agents.

## Category 2 — QA (Quality Analysts)

**Rule:** `dept_name = Quality Assurance` AND `org_role = Quality Analyst`

**File:** [dept_quality_assurance.json](dept_quality_assurance.json) — 267 records

**Deviation from the original meeting plan:** the plan called for `org_role = Supervisor or Leader` to identify QA staff. Real data doesn't support that — QA department's org_role breakdown is Quality Analyst 267, Executive 56, Team leader 17, Manager 8, Assistant Manager 7, Sr. Executive 4, Supervisor 4, Sr. Manager 3, others 3. There's no org_role literally called "Leader" anywhere in MWP. Supervisor/Leader as written would only catch ~1% of the department. Switched the rule to `org_role = Quality Analyst`, which is the actual dominant value (72% of the department) and matches what a QA reviewer role means in practice.

## Category 3 — Supervisors / Team Leaders (tree nodes)

**Rule:** `org_role IN (Supervisor, Team leader)`

**File:** [supervisors_and_leaders.json](supervisors_and_leaders.json) — 907 records (Team leader 635, Supervisor 272)

Membership in this category is by title alone — no requirement that the person currently appears as someone else's `l1_supervisor_mwpid`. A Supervisor/Team leader with zero direct reports today still belongs in this tree-node category (e.g. newly promoted, between assignments, or supervising a process not yet reflected in this snapshot); the org tree build step below is what determines whether they currently have children, not the category filter itself.

## How this maps onto the tree

MWP's hierarchy is flat: `Client → Process`, with `l1_supervisor_mwpid` / `l1_supervisor_name` carrying the actual reporting line on each record — there's no separate department node forced between client and process. AIQMS V2 is being built to mirror this directly instead of the legacy `Org → SBU → Dept → Client → LOB` structure.

Practical effect for tree construction:
- **Leaf nodes** = Category 1 (Agents) and Category 2 (QA Analysts) — they report up via `l1_supervisor_mwpid`, never referenced as a supervisor themselves.
- **Branch nodes** = Category 3 (Supervisors/Team Leaders) — these are the people the leaves point to. Build the tree by resolving each leaf's `l1_supervisor_mwpid` against Category 3's `fusion_id`.
- **Grouping context** for any node comes from `client_names` + `process_names` on that same record (359 distinct clients, 561 distinct processes seen in this snapshot) — that pair is the Client→Process branch the person sits under, independent of their supervisor chain.
- Fields not present in this API response but noted as available on request for further tree enrichment (SBU, Geo, Location, Country, Grade) are not yet pulled — add them only if V2 needs a grouping layer beyond Client→Process.

## Sample Org Tree — Geography → Country → Location → Client → Process

**File:** [tree_geo_country_location_client_process.json](tree_geo_country_location_client_process.json) — built from [user_requirements.json](user_requirements.json) (agent + qa + supervisor + team_leader, 13,835 users).

**Caveat:** MWP's raw payload only returns `office_name` (city) and `office_id` — there is no raw `Geo` or `Country` field. Country and Geography here are derived by us from the 27 real-world cities present in the data, not pulled from MWP. If MWP's actual `Geo`/`Country` enrichment fields (noted earlier as available on request) use different groupings, this tree should be rebuilt from those instead of this mapping.

**Structure:** `Geography → Country → Location (city) → Client → Process`, with `Process` always the leaf — no node type sits below it. Leaves hold category counts (`total`, `agent`, `qa`, `supervisor`, `team_leader`), not individual user records.

Resolved shape from the current data: 4 geographies (EMEA, NORAM, APAC, LATAM) → 12 countries → 27 cities, branching into client/process from there (branch sizes vary heavily — Kolkata alone carries a large share of clients/processes as the largest site).

Sample branch:

```json
{
  "APAC": {
    "India": {
      "Kolkata": {
        "JioMart": {
          "Jiomart Voice": { "total": 42, "agent": 38, "qa": 1, "supervisor": 1, "team_leader": 2 },
          "Jiomart Chat": { "total": 15, "agent": 12, "qa": 2, "supervisor": 0, "team_leader": 1 }
        }
      }
    }
  }
}
```

## Daily Sync Process

Not a full wipe/rebuild — `fusion_id` is the stable key, and the daily pull is diffed against the local DB copy so we only touch what actually changed. Rebuilding ~15k rows a day for no reason burns I/O for zero benefit; a diff makes every change auditable, which a wipe/rebuild doesn't.

**Step 1 — Fetch**
Call `getmwpactiveuser` once daily (off-peak), save the raw response as-is (same pattern as `mwp_active_users.json`) before touching anything — keeps a rollback point if the diff step misbehaves.

**Step 2 — Classify**
Run every record through the Category 1/2/3 rules above (and re-derive `client_names` + `process_names` grouping) so each row going into the diff already carries its category, not just raw `org_role`/`dept_name`.

**Step 3 — Diff against local DB, keyed by `fusion_id`**
- In today's pull, not in DB → **new hire**
- In DB, not in today's pull → **removed** (left MWP entirely)
- In both, field-level differences → **changed**, evaluate field-by-field using the condition table below
- In both, identical → skip, no write

**Step 4 — Apply per the condition table**

| Field / change | Action | Why |
|---|---|---|
| New `fusion_id` | Auto-create user, assign category | straightforward onboarding |
| `fusion_id` missing from today's pull | Auto-deactivate (soft, don't delete) | person left MWP; keep history |
| `status` flips `1 → 4` | Auto-deactivate | pending confirmation of what `4` means, see Open Items |
| `status` flips `4 → 1` | Auto-reactivate | rejoined / returned from whatever state `4` is |
| `l1_supervisor_mwpid` / `l1_supervisor_name` changed | Auto-update reporting line | matches "Supervisor changed → auto-update" from governance discussion |
| `client_names` / `process_names` changed, node doesn't exist yet | Auto-create the node, then attach user | "new process created → auto-create node" |
| `client_names` / `process_names` changed, node exists | Auto-move user to existing node | routine transfer |
| `org_role` changed (category-affecting, e.g. Production Specialist → Team leader) | **Do NOT auto-apply** — flag for manual admin review | protects manually-added extra roles in AIQMS from being silently overwritten by MWP's single-role view |
| `designation` changed only (org_role/dept_name unchanged) | Ignore | designation was never part of classification, no downstream effect |
| Contact fields (`email_id_off`, `email_id_per`) changed | Auto-update | non-structural, no risk to category/tree |

**Step 5 — Manual review queue**
Anything flagged in Step 4 (role changes, and the pre-existing ~3% multi-role/senior-QA-manager edge cases) lands in an admin queue rather than being applied automatically — this is the "~95–97% automated, ~3% manual cleanup" split from the original plan.

**Step 6 — Audit log**
Every add/update/deactivate/flag gets written to a sync log (date, `fusion_id`, change type, before/after values) before being applied to the live table — needed to answer "why did this user's supervisor change last Tuesday" without re-diffing raw API dumps.

## Open items before this goes into the sync rules matrix

- **Status codes:** endpoint is "active user" but returns `status: "4"` on 557 records (vs `"1"` on 14,782) — meaning of `4` needs to be confirmed with MWP so the daily diff sync deactivates correctly rather than guessing.
- **Multi-role:** MWP returns one `org_role` per person — confirmed no field carries a second role. Manual admin add-on for multi-role/senior-QA-manager edge cases still applies as originally planned.
- **Volume:** this snapshot is 15,339 total records, roughly 10x the ~1,500–1,600 figure used earlier for daily sync sizing — worth reconciling which scope that estimate was based on.
