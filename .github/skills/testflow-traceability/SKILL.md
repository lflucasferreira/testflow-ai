---
name: testflow-traceability
description: >-
  Defines BR-*/TC-* ids, plan/case/data templates, and gap rules for TestFlow.
  Use when planning tests, writing cases, building fixtures, reviewing traceability,
  or producing specs from docs/business-rules.
---

# TestFlow traceability

## Chain

`docs/business-rules/` → `BR-*` → plan scenario (`1.1`) → case `TC-*` → `specs/data/` → Playwright title/tag with same `TC-*`

## Ids

- Rules: `BR-001`, `BR-002`, … (stable; do not renumber casually)
- Cases: `TC-001`, `TC-002`, … (one primary `BR-*` per case; extras only if truly shared)
- Plan scenarios: hierarchical `1.`, `1.1`, `1.2`, … (coverage iterates these)

## Rules

1. Do not invent a `BR-*` absent from the business-rules doc.
2. Ambiguity → open question in the plan, not invented coverage.
3. Missing evidence for a listed rule → explicit **gap**, not a fake case.
4. Agents never rewrite `docs/business-rules/` to close gaps.

## Artifacts

| Artifact | Path | Must include |
|---|---|---|
| Plan | `specs/<feature>.plan.md` | scenario id, title, `BR-*`, notes/questions |
| Cases | `specs/<feature>.cases.md` | `TC-*`, `BR-*`, precondition, steps, expected |
| Data | `specs/data/<feature>.json` | record cites consuming `TC-*` |

## Templates

See [templates.md](templates.md).
