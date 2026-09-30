---
agent: testflow-healer
description: Heal failing Playwright specs from a failure report
---

Heal the failing Playwright specs using the failure report I provide (paste log / report path below).
If I say "run and fix" instead, run the suite (or the listed files) and heal failures one after another.

- Touch only `tests/`, related helpers, and `specs/data/` when a fixture is wrong
- Do not edit `docs/business-rules/` or rewrite plans
- For product bugs, keep the failing assertion and report `TC-*` / `BR-*`
- Fix and re-run one failing test at a time

Failure input:
