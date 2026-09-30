# testflow-ai

Draft QA agents for the TestFlow ecosystem.

Idea: a business-rules document goes in; agents plan, generate (cases + data + Playwright), review, and heal failing specs.

## Layout (GitHub Copilot / Playwright agents style)

```text
.github/
  agents/     # who runs (identity, tools, limits)
  prompts/    # saved requests that chain or target an agent
  skills/     # how-to playbooks loaded on demand
  workflows/  # coverage / CI / heal triggers
docs/
  business-rules/   # input documents (source of truth)
specs/              # generated plans, cases, data
tests/              # Playwright specs
```

## Roles

| Agent | Prompt | Delivers |
|---|---|---|
| `testflow-planner` | `testflow-plan` | Plan under `specs/` |
| `testflow-generator` | `testflow-generate` | Cases, data, and Playwright specs |
| `testflow-reviewer` | `testflow-review` | Review without applying fixes until asked |
| `testflow-healer` | `testflow-heal` | Minimal fixes for failing specs |

Loop prompt (no dedicated agent — calls the specialists above):

| Prompt | Flow |
|---|---|
| `testflow-coverage` | planner → generate each case → healer |

## Skills

| Skill | Use for |
|---|---|
| `testflow-traceability` | `BR-*` / `TC-*`, plan/case/data templates, gaps |
| `testflow-playwright` | seed, selectors, fixtures, spec layout |
| `testflow-heal` | failure classification and heal guardrails |

## Workflows

| Workflow | Role |
|---|---|
| `testflow-coverage` | Issue handoff for plan → generate → heal when rules change |
| `testflow-ci` | Playwright gate (skips until the project is bootstrapped) |
| `testflow-heal` | Issue handoff when CI fails or a log is provided |

## How to use (draft)

1. Put (or point to) a document under `docs/business-rules/`.
2. For end-to-end coverage (Playwright-style), run `testflow-coverage` in chat — or dispatch the **TestFlow coverage** workflow to open the task issue.
3. Review artifacts under `specs/` and `tests/` before merge.
4. On a failed run outside coverage, pass the log to `testflow-heal` (or let **TestFlow heal** open the issue after CI fails).

Files under `.github/agents`, `.github/prompts`, `.github/skills`, and `.github/workflows` are contract drafts. This repo does not yet ship its own runtime or a wired Playwright MCP.
