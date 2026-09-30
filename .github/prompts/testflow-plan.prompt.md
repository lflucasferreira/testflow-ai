---
agent: testflow-planner
description: Generate per-system strategies and the test plan
---

From `docs/business-rules/example-checkout.md`:

1. Detect each `SYS-*` and write `specs/*.strategy.md` using the QA system-design framework (risks, layers, data, CI, ownership, observability, release, metrics; MVP vs mature).
2. Create the scenario plan `specs/checkout.plan.md`.

- Number scenarios as `1.`, `1.1`, `1.2`, …
- Every scenario cites `SYS-*`, `BR-*`, and the strategy path
- Defer non-UI levels per strategy
- If `tests/seed.spec.ts` exists, use it as setup/style context
