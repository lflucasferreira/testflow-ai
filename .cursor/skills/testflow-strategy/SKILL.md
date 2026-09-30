---
name: testflow-strategy
description: >-
  QA system-design framework for per-system test strategies: business risk,
  test layers, data/environments, automation ownership, CI/CD gates,
  observability, release, and metrics. Use when writing or reviewing
  specs/*.strategy.md, interviewing-style quality architecture, or planning
  how quality scales for a SYS-* in docs/business-rules.
---

# TestFlow strategy (QA system design)

You are designing the **quality system** for a product system — not inventing a full backend architecture. Defensible risk and trade-offs beat buzzwords.

## Mindset

- Start from **what breaks the business** (money, data, security, availability), not from a favorite tool stack.
- Ask / list unknowns when the reference doc is silent: scale, SLAs, stack, team size, deploy frequency, regulatory risk.
- State **trade-offs** explicitly (e.g. “E2E everywhere is expensive; prioritize happy path + contracts”).
- Offer **MVP vs mature** for automation/CI when evidence is thin — do not pretend one “correct” diagram.
- Do not invent systems, APIs, or UIs absent from the business-rules document; mark gaps as open questions.

## Required strategy sections (each `SYS-*`)

Write `specs/<system-slug>.strategy.md` with these sections (adapt depth to evidence in the doc):

### 1. Requirements and risks
What fails the business for this system? Tie each risk to `BR-*` and priority (P0/P1/P2). Examples: double charge, stock inconsistency, PII leak, downtime.

### 2. Pyramid / layers
Justify cost: unit, contract/API, critical UI-E2E, exploratory/manual, performance, security — **only layers that earn their keep**. Map each `BR-*` to a primary level. Playwright = UI-E2E candidates only.

### 3. Environments and data
Prod-like isolation, seeds/fixtures, PII handling, idempotency, test cards/accounts, cleanup. Mark pending if the doc does not specify.

### 4. Automation and ownership
Who writes what (dev vs QA); flaky policy (quarantine + owner); fixtures vs POM; contract testing if APIs are in scope. Keep ownership as recommendations when the org is unknown.

### 5. CI/CD
What runs on **PR** vs **nightly** vs **pre-prod**; gates; feedback time. Prefer: PR = fast (unit/contract); nightly = UI-E2E; prod = monitors — adjust to doc evidence.

### 6. Observability
Logs, traces, metrics, alerts — how QA uses them to prioritize (error rate, payment failures). Pending if undocumented.

### 7. Release
Canary / feature flags / rollback / smoke pós-deploy / checklist — only what the product context supports; otherwise open questions.

### 8. Metrics
Useful signals: escape defects, flake rate, meaningful coverage (not vanity), MTTR for bugs. Avoid “100% UI coverage” as a goal.

## MVP vs mature (required stub)

| Track | Example |
|---|---|
| MVP | Happy-path UI-E2E for P0 + unit/API on pricing/payment; PR unit; manual for edge cases |
| Mature | Contracts on payment/stock APIs; nightly E2E suite; flake quarantine; canary + smoke; dashboards |

## Checkout-style example (mental model)

- Risks: double payment, stock, fraud  
- Layers: unit on pricing; contract on payment/stock APIs; E2E = happy purchase + 2 critical failures; load on gateway; smoke pós-deploy  
- CI: PR = unit + contract; nightly = E2E; prod = error-rate alerts  
- Data: test cards, isolated accounts, cleanup  
- Flaky: quarantine + owner  

## Output rules

1. One strategy file per `SYS-*`.
2. Every claim grounded in the reference doc or labeled **open question** / **assumption**.
3. Explicit list: Playwright candidates (`BR-*`) vs deferred to API/unit/manual.
4. Strategy completes **before** scenario planning for that system.
