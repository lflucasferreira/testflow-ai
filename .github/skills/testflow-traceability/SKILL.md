---
name: testflow-traceability
description: >-
  Defines SYS-*/BR-*/TC-* ids, per-system test strategy links, plan/case/data
  templates, and gap rules for TestFlow. Use when detecting systems, planning
  tests, writing cases, building fixtures, reviewing traceability, or producing
  specs from docs/business-rules. For strategy section depth, also use
  testflow-strategy.
---

# TestFlow traceability

## Chain

`docs/business-rules/` → `SYS-*` → `*.strategy.md` (QA system design) → `BR-*` → plan scenario (`1.1`) → case `TC-*` → `specs/data/` → Playwright (UI-E2E only) titled with `TC-*`

## Ids

- Systems: `SYS-001`, `SYS-002`, … (from `## SYS-xxx` in the reference doc; infer one system only if headings are missing)
- Rules: `BR-001`, `BR-002`, … (stable; do not renumber casually)
- Cases: `TC-001`, `TC-002`, … (one primary `BR-*` per case; always cite `SYS-*`)
- Plan scenarios: hierarchical `1.`, `1.1`, `1.2`, … (coverage iterates these)

## Strategy (per system)

For each `SYS-*`, produce `specs/<system-slug>.strategy.md` **before** detailed scenarios.

Use **`testflow-strategy`** for the full QA system-design framework (8 sections + MVP vs mature + trade-offs).

Minimum checklist:

| Section | Content |
|---|---|
| Risks | business impact × `BR-*` × P0/P1/P2 |
| Layers | unit / API / UI-E2E / manual / perf / security — justified |
| Data / env | isolation, PII, fixtures (or pending) |
| Ownership / flake | who writes what; quarantine policy |
| CI/CD | PR vs nightly vs pre-prod gates |
| Observability / release / metrics | as evidenced, else open questions |
| Playwright split | UI-E2E candidates vs deferred |

Do not invent systems, APIs, or UIs absent from the reference document.

## Rules

1. Do not invent a `SYS-*` or `BR-*` absent from the business-rules doc (except a single inferred `SYS-001` when the doc has no system headings — label it inferred).
2. Ambiguity → open question in strategy/plan, not invented coverage.
3. Missing evidence for a listed rule → explicit **gap**, or **deferred by strategy** (level ≠ UI-E2E plan).
4. Agents never rewrite `docs/business-rules/` to close gaps.
5. Playwright specs only for strategy level **UI-E2E**.
6. Prefer critical P0 paths over exhaustive UI when the strategy says so.

## Artifacts

| Artifact | Path | Must include |
|---|---|---|
| Strategy | `specs/<system>.strategy.md` | 8 framework sections (see testflow-strategy) |
| Plan | `specs/<feature>.plan.md` | scenario id, `SYS-*`, `BR-*`, strategy path |
| Cases | `specs/<feature>.cases.md` | `TC-*`, `SYS-*`, `BR-*`, level, steps |
| Data | `specs/data/<feature>.json` | record cites `TC-*` (+ `SYS-*` when useful) |

## Templates

See [templates.md](templates.md).
