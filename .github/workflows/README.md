# Workflows

Agentic + CI drafts for TestFlow.

| Workflow | Trigger | Does |
|---|---|---|
| `testflow-coverage.yml` | `workflow_dispatch` or push to `docs/business-rules/**` on `main` | Opens an issue with the `testflow-coverage` prompt (planner → generator → healer) |
| `testflow-ci.yml` | PR/push touching `tests/**` (or manual) | Playwright gate when `package.json` + `playwright.config.ts` exist; otherwise no-op |
| `testflow-heal.yml` | `workflow_dispatch` or failed **TestFlow CI** `workflow_run` | Opens an issue with the `testflow-heal` prompt + failure ref |

Flow:

```text
docs/business-rules/** change
        → coverage issue (agent runs prompts/skills)
        → PR with specs/ + tests/
        → TestFlow CI (Playwright)
        → on failure: heal issue
```

Until Copilot coding agent (or another runner) is assigned to those issues, treat them as the handoff contract; local chat can still run the same prompts manually.
