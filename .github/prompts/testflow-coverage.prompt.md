---
agent: default
description: Produce end-to-end test coverage (plan → generate → heal)
---

Parameters:

- Task: the feature or flow to cover
- Business-rules file: defaults to `docs/business-rules/example-checkout.md`
- Seed file (optional): defaults to `tests/seed.spec.ts` when it exists
- Test plan file (optional): Markdown plan to write under `specs/`

1. Call `#testflow-planner` with:
   - the business-rules file
   - the seed file if present (as environment/example context)
   - the target plan path under `specs/`

2. For each numbered scenario in the plan file (`1.1`, `1.2`, …), **one after another, not in parallel**, call `#testflow-generator` (per-case mode) with:
   - that single plan scenario
   - matching data path under `specs/data/`
   - the Playwright spec path under `tests/`

3. Call `#testflow-healer` with:
   Run the generated tests and fix the failing ones one after another.

Do not rewrite the business-rules document. Stop and report gaps (`BR-*` without a plan scenario) before generating.
