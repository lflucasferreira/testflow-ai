---
agent: testflow-generator
description: Generate cases, data, and Playwright specs from plan + strategies
---

From `specs/checkout.plan.md` and linked `*.strategy.md`, generate cases, test data, and Playwright automation (batch; UI-E2E only for specs).

- Cases: `specs/checkout.cases.md` (`SYS-*`, `BR-*`, `TC-*`, level, precondition, steps, expected result)
- Data: `specs/data/checkout.json` (every record cites `TC-*`)
- Specs: `tests/**/*.spec.ts` only for UI-E2E (title or tag includes `TC-*`)
- Do not change files outside `specs/`, `tests/`, and a minimal Playwright config

For a single plan scenario (coverage loop), name the scenario id (e.g. `1.2`) and use per-case mode.
