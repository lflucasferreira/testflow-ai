---
agent: testflow-planner
description: Generate the test plan
---

Create the test plan from `docs/business-rules/example-checkout.md`.

- Output: `specs/checkout.plan.md`
- Number scenarios as `1.`, `1.1`, `1.2`, …
- Every scenario cites a `BR-*`
- If `tests/seed.spec.ts` exists, use it as setup/style context
