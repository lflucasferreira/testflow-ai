---
agent: testflow-generator
description: Generate cases, data, and Playwright specs from a plan
---

From `specs/checkout.plan.md`, generate cases, test data, and Playwright automation (batch mode for the whole plan).

- Cases: `specs/checkout.cases.md` (`BR-*`, `TC-*`, precondition, steps, expected result)
- Data: `specs/data/checkout.json` (every record cites `TC-*`)
- Specs: `tests/**/*.spec.ts` (title or tag includes `TC-*`)
- Do not change files outside `specs/`, `tests/`, and a minimal Playwright config

For a single plan scenario (coverage loop), name the scenario id (e.g. `1.2`) and use per-case mode.
