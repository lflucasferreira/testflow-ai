# TestFlow generate

From `specs/checkout.plan.md`, generate cases, test data, and Playwright automation (batch mode for the whole plan).

Follow `.github/agents/testflow-generator.agent.md`, `.cursor/skills/testflow-traceability/SKILL.md`, and `.cursor/skills/testflow-playwright/SKILL.md`.

- Cases: `specs/checkout.cases.md` (`BR-*`, `TC-*`, precondition, steps, expected result)
- Data: `specs/data/checkout.json` (every record cites `TC-*`)
- Specs: `tests/**/*.spec.ts` (title or tag includes `TC-*`)
- Do not change files outside `specs/`, `tests/`, and a minimal Playwright config

For a single plan scenario (coverage loop), name the scenario id (e.g. `1.2`) and use per-case mode.

Extra context from the user (optional):
