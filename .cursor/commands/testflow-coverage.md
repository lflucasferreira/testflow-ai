# TestFlow coverage

Produce end-to-end test coverage (strategy → plan → generate → heal).

Follow the agent contracts in `.github/agents/` and skills in `.cursor/skills/` (or `.github/skills/`).

**Defaults**
- Business-rules: `docs/business-rules/example-checkout.md`
- Seed: `tests/seed.spec.ts` when present
- Strategies + plan: under `specs/`

**Steps**
1. Act as `#testflow-planner` (see `.github/agents/testflow-planner.agent.md`) with the business-rules file and seed:
   - detect each `SYS-*`
   - write `specs/*.strategy.md` per system
   - then write the scenario plan
2. For each numbered **UI-E2E** scenario in the plan (`1.1`, `1.2`, …), **one after another, not in parallel**, act as `#testflow-generator` in per-case mode.
3. Act as `#testflow-healer`: run the generated tests and fix failures one after another.

Do not rewrite `docs/business-rules/`. Stop and report `SYS-*` / `BR-*` gaps before generating.

Extra context from the user (optional):
