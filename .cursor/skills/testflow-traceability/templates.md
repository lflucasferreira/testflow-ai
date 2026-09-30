# Traceability templates

## Strategy (`specs/checkout-web.strategy.md`)

Full section meanings: `.github/skills/testflow-strategy/SKILL.md`.

```markdown
# SYS-001 — Checkout Web — test strategy

Source: `docs/business-rules/example-checkout.md`

## 1. Requirements and risks
| Risk (business) | Priority | BR | Notes |
|---|---|---|---|
| Double charge / failed money path | P0 | BR-004 | …
| Wrong subtotal / pricing trust | P0 | BR-001 | …
| Selling unavailable stock | P1 | BR-002 | …

## 2. Pyramid / layers
| Level | BR-* | Why this layer (cost vs risk) |
|---|---|---|
| Unit | … | pending if no code surface in doc |
| Contract / API | BR-005 (if SYS-002) | …
| UI-E2E (Playwright) | BR-001, BR-004, … | happy path + critical failures only |
| Manual / exploratory | … | …
| Perf / security | … | only if risk justifies |

## 3. Environments and data
- Env: …
- Data / PII / idempotency: … (or pending)
- Cleanup: …

## 4. Automation and ownership
- Who writes unit vs E2E: … (assumption if unknown)
- Flaky policy: quarantine + owner
- UI pattern: fixtures + role selectors (see Playwright skill)

## 5. CI/CD
| Stage | What runs | Gate |
|---|---|---|
| PR | unit / contract (fast) | block on fail |
| Nightly | UI-E2E critical | report + flake track |
| Pre-prod / prod | smoke + monitors | … |

## 6. Observability
- Signals QA watches: … (or open question)

## 7. Release
- Flags / canary / rollback / smoke pós-deploy: … (or open question)

## 8. Metrics
- Escape defects, flake rate, meaningful coverage, MTTR — targets TBD if unknown

## MVP vs mature
| | MVP | Mature |
|---|---|---|
| Automation | P0 UI happy path + … | contracts + nightly E2E + quarantine |
| CI | PR unit; manual E2E | PR fast + nightly E2E gates |

## Playwright candidates
- BR-… (UI-E2E)

## Deferred (non-UI)
- BR-… → API / unit / manual

## Open questions / assumptions
- …
```

## Plan (`specs/checkout.plan.md`)

```markdown
# Checkout — test plan

Source: `docs/business-rules/example-checkout.md`
Strategies: `specs/checkout-web.strategy.md`, …

## SYS-001 — Checkout Web

### 1. Happy path
#### 1.1 Valid add to cart
- SYS: SYS-001
- BR: BR-001
- Level: UI-E2E
- Strategy: specs/checkout-web.strategy.md
- Intent: …

## Deferred by strategy
- BR-005 (SYS-002) — API level only

## Open questions
- …
```

## Case (`specs/checkout.cases.md`)

```markdown
## TC-001 — Valid add to cart
- SYS: SYS-001
- BR: BR-001
- Plan: 1.1
- Level: UI-E2E
- Precondition: …
- Steps:
  1. …
- Expected: …
```

## Data (`specs/data/checkout.json`)

```json
{
  "TC-001": {
    "sys": "SYS-001",
    "cart": { "items": [{ "sku": "SKU-1", "qty": 1 }] },
    "pendingFields": []
  }
}
```
