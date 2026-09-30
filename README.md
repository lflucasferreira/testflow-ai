# testflow-ai

Draft QA agents for the TestFlow ecosystem.

Idea: a business-rules document goes in; agents plan, generate (cases + data + Playwright), review, and heal failing specs.

## Layout (GitHub Copilot / Playwright agents style)

```text
.github/
  agents/     # who runs (identity, tools, limits) — Copilot + shared contracts
  prompts/    # Copilot prompt files (*.prompt.md)
  skills/     # how-to playbooks (Copilot)
  workflows/  # coverage / CI / heal triggers
.cursor/
  commands/   # Cursor slash commands (/testflow-*)
  skills/     # same playbooks for Cursor discovery
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
| `testflow-ci` | Playwright gate (`npm test` on chromium) |
| `testflow-heal` | Issue handoff when CI fails or a log is provided |

## How to use (draft)

### Cursor
Type `/` in **Agent** chat and pick:
`/testflow-coverage`, `/testflow-plan`, `/testflow-generate`, `/testflow-review`, `/testflow-heal`
(from `.cursor/commands/`).

### Copilot (VS Code)
Use the matching prompts under `.github/prompts/` (`testflow-coverage.prompt.md`, …).

### Shared steps
1. Put (or point to) a document under `docs/business-rules/`.
2. Prefer `/testflow-coverage` for the full loop, or a single-step command/prompt.
3. Review artifacts under `specs/` and `tests/` before merge.
4. On a failed run outside coverage, use `/testflow-heal` (or the GitHub heal workflow issue).
5. Local suite: `npm test`. Set `BASE_URL` when covering a real app.

Files under `.github/` and `.cursor/` are contract drafts. Playwright is bootstrapped (`npm test`).
