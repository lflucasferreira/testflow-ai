# TestFlow coverage

Produce end-to-end test coverage (plan → generate → heal).

Follow the agent contracts in `.github/agents/` and skills in `.cursor/skills/` (or `.github/skills/`).

**Defaults**
- Business-rules: `docs/business-rules/example-checkout.md`
- Seed: `tests/seed.spec.ts` when present
- Plan: under `specs/`

**Steps**
1. Act as `#testflow-planner` (see `.github/agents/testflow-planner.agent.md`) with the business-rules file and seed.
2. For each numbered scenario in the plan (`1.1`, `1.2`, …), **one after another, not in parallel**, act as `#testflow-generator` in per-case mode.
3. Act as `#testflow-healer`: run the generated tests and fix failures one after another.

Do not rewrite `docs/business-rules/`. Stop and report `BR-*` gaps before generating.

Extra context from the user (optional):
