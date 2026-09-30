---
agent: testflow-reviewer
description: Review testflow-ai artifacts
---

Review strategies, plan, cases, data, and Playwright specs under `specs/` and `tests/**/*.spec.ts`.

Focus on per-system `SYS-*` strategies, `BR-*` / `TC-*` traceability, UI-E2E vs deferred levels, flakiness risk, and maintainability.
Report by file, with severity and a concrete fix.
Do not apply changes unless I say "fix".
