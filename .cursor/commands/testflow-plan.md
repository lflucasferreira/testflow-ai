# TestFlow plan

From `docs/business-rules/example-checkout.md`:

1. Detect each `SYS-*` and write a **test strategy per system** (`specs/*.strategy.md`).
2. Then create the scenario plan (`specs/checkout.plan.md`).

Follow `.github/agents/testflow-planner.agent.md`, `.cursor/skills/testflow-strategy/SKILL.md`, and `.cursor/skills/testflow-traceability/SKILL.md`.

- Strategy = QA system design (risks, layers, data, CI, ownership, …) — not inventing the product architecture
- Number scenarios as `1.`, `1.1`, `1.2`, …
- Every scenario cites `SYS-*` + `BR-*` + strategy path
- Defer non-UI levels per strategy (no invented UI scenarios)
- If `tests/seed.spec.ts` exists, use it as setup/style context

Extra context from the user (optional):
