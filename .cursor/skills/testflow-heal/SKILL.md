---
name: testflow-heal
description: >-
  Classifies Playwright failures and applies minimal TestFlow heal fixes without
  masking product bugs. Use when healing failing specs, reading CI/Playwright
  reports, or running the coverage heal step.
---

# TestFlow heal

## Modes

- **From report**: CI log / Playwright report / stack / failing `TC-*` list
- **From coverage**: run generated (or listed) tests, then fix one failure at a time

## Classify first

| Class | Action |
|---|---|
| Flaky wait / timing | tighten locator + web-first assert; avoid hard `sleep` |
| Brittle selector | restable selector (`getByRole` / `getByTestId`) |
| Stale assertion | align with case/expected **only if** BR still agrees |
| Wrong / missing fixture | fix `specs/data/` for that `TC-*` |
| Environment / setup | seed, config, deps — smallest fix |
| Product bug | **do not** weaken assertion; report `TC-*` + `BR-*` + evidence |

## Guardrails

1. Do not expand coverage or invent `TC-*`.
2. Never edit `docs/business-rules/` or rewrite the plan.
3. Touch only `tests/`, related helpers, and `specs/data/` when the fixture is wrong.
4. Fix → re-run **that** test → next failure.
5. Quarantine/skip only if the user asks.

## Report back

For each item: root cause (one line), files changed, `TC-*` healed, or left as product bug / blocked.
