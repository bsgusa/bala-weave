# Log — bsgusa / bala-weave (collab + contributions)

## 2026-10-23 — New world scaffold created

### Created
- Repo skeleton: README.md, ROADMAP.md ([NOW]/[NEXT]/[LATER]), backlog/priorities.md, AGENTS.md, CLAUDE.md
- LICENSE (Proprietary), .gitignore, .github/workflows/ci.yml
- company/repos.json — repos that accept contributions via bala-weave templates
- scripts/label-check.mjs — label consistency check
- reports/LOG.md — this file

### Standard labels
good first issue, help wanted, collab, trending-signal, NOW, NEXT, LATER, PARKED

### Standard PR template fields
What / Which repo / Connection / Checks

### Standard issue template fields
What / Which repo / Priority / Connection / Next step

### Next
- .github/PULL_REQUEST_TEMPLATE.md
- .github/ISSUE_TEMPLATE/
- docs/CONTRIBUTING.md — end-to-end contribution flow
- docs/GOOD_FIRST_ISSUES.md — curated starter issues per repo

## 2026-11-01 — Lexora repo slugs corrected

The 2026-11-01 GitHub cleanup renamed `bsgusa/AI-Job-Automation` → `bsgusa/company-lexora-legal`
(lexoraai.space) and `bsgusa/company-lexoraai` → `bsgusa/company-lexora-jobs` (lexoraai.org).
This repo still referenced the old slug.

- `company/repos.json`: old slug replaced with `company-lexora-legal`; `company-lexora-jobs` added (10 repos).
- README / docs references updated to the new slugs. Local checkout paths unchanged
  (`~/AI-Job-Automation`, `~/company-lexoraai` — the directories were not renamed).
- Historical entries above are left as-is.
