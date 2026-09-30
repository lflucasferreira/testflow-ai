# TestFlow plan

Create the test plan from `docs/business-rules/example-checkout.md`.

Follow `.github/agents/testflow-planner.agent.md` and `.cursor/skills/testflow-traceability/SKILL.md`.

- Output: `specs/checkout.plan.md`
- Number scenarios as `1.`, `1.1`, `1.2`, …
- Every scenario cites a `BR-*`
- If `tests/seed.spec.ts` exists, use it as setup/style context

Extra context from the user (optional):
