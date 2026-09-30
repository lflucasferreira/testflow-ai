# TestFlow generate

From `specs/checkout.plan.md` (and linked `*.strategy.md`), generate cases, test data, and Playwright automation for **UI-E2E** items (batch mode for the whole plan).

Follow `.github/agents/testflow-generator.agent.md`, `.cursor/skills/testflow-traceability/SKILL.md`, and `.cursor/skills/testflow-playwright/SKILL.md`.

- Cases: `specs/checkout.cases.md` (`SYS-*`, `BR-*`, `TC-*`, level, precondition, steps, expected)
- Data: `specs/data/checkout.json` (every record cites `TC-*`)
- Specs: `tests/**/*.spec.ts` only for UI-E2E (title or tag includes `TC-*`)
- API/unit/manual cases: case + data only — no Playwright file
- Do not change files outside `specs/`, `tests/`, and a minimal Playwright config

For a single plan scenario (coverage loop), name the scenario id (e.g. `1.2`) and use per-case mode.

Extra context from the user (optional):
