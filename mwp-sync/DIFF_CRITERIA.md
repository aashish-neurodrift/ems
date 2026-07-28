# Diff Criteria — What Counts as a Change

What `diff.ts` actually compares between the existing DB state and each day's incoming MWP pull, field by field.

## The 5 comparison flags (`ChangedUser` in `diff.ts`)

| Flag | Compares | Corresponds to |
|---|---|---|
| `statusChanged` | `status` ("1"/other) vs `User.active` | active/inactive |
| `categoryChanged` | `classify(dept_name, org_role)` vs stored `User.role` | org_role/role (and partially department — see gap below) |
| `supervisorChanged` | `l1_supervisor_mwpid` (resolved to our internal user id) vs `RoleAssignment.supervisorId` | supervisor rotation |
| `nodeChanged` | expected tree path built from `office_name` + client/process pairs vs stored `WorkspaceNode.path` on the active `NodeAssignment` | client/process reassignment (and office/location transfer — folded in, not separated) |
| `emailChanged` | `email_id_off` vs `User.email` | contact info |

**hired/fired** isn't one of the five flags — it's structural, decided upstream in `diff()`'s bucketing logic, not a per-field comparison:
- a `fusion_id` with no matching DB row → new hire
- a DB row whose `fusion_id` is absent from the entire incoming pull → removed / soft-deactivated

## Gaps — things not currently compared

- **`dept_name` has no standalone tracking.** It only feeds `classify()` jointly with `org_role` to produce `category`. If `dept_name` changes but the classification output doesn't flip (e.g. moving between two departments that both map to `category: null`), nothing detects it — there's no raw `dept_name` column stored anywhere to diff against. `sub_dept_name` isn't even parsed into `NormalizedEmployee`.
- **Name changes aren't detected.** `fname`/`lname` build `displayName`, stored on `User` at creation, but there's no `displayNameChanged` flag — a legal name change would never sync.
- **`doj` (date of joining) is captured in `normalize.ts` but goes nowhere.** No `joinedAt` column exists on the local `User` model, so it's dropped after being archived in `mwp_employee_raw`'s raw JSON.
- **`designation` is deliberately ignored** — captured, never compared, per the earlier governance call ("designation changed only → Ignore, no downstream effect").
- **Office/location transfer is covered only indirectly.** Moving offices changes the expected tree path, so it does trip `nodeChanged`, but it's folded into "client/process changed" rather than being its own distinguishable signal — a pure office transfer with the same client/process looks identical to a client reassignment in the current flags.

## Possible follow-ups (not yet implemented)

- Add a `displayNameChanged` flag (trivial — same pattern as `emailChanged`).
- Add a `joinedAt` column + comparison if hire-date/tenure reporting matters.
- Split `nodeChanged` into a distinct `locationChanged` vs `clientProcessChanged` so an office transfer isn't lumped in with a client reassignment.
