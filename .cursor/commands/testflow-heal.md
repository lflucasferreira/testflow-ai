# TestFlow heal

Heal failing Playwright specs using the failure report below (or run-and-fix if asked).

Follow `.github/agents/testflow-healer.agent.md` and `.cursor/skills/testflow-heal/SKILL.md`.

- Touch only `tests/`, related helpers, and `specs/data/` when a fixture is wrong
- Do not edit `docs/business-rules/` or rewrite plans
- For product bugs, keep the failing assertion and report `TC-*` / `BR-*`
- Fix and re-run one failing test at a time

Failure input:
