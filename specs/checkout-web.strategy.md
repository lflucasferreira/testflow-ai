# SYS-001 — Checkout Web — test strategy

Source: `docs/business-rules/example-checkout.md`

## 1. Requirements and risks
| Risk (business) | Priority | BR | Notes |
|---|---|---|---|
| Wrong subtotal / pricing trust | P0 | BR-001 | Subtotal must equal unit price × quantity; a silent miscalculation erodes trust and can leak revenue either direction. |
| Selling unavailable stock | P1 | BR-002 | Adding a zero-stock item to the cart risks overselling and broken fulfillment downstream. |
| Coupon abuse / discount leakage | P1 | BR-003 | An accepted expired coupon is a direct revenue leak; a rejected valid coupon is a conversion loss. |
| Order confirmed without reliable payment, or payment lost silently | P0 | BR-004 | Approved payment must reliably produce one confirmed order and an empty cart — any mismatch is a money-path failure (double charge, lost order, phantom confirmation). |

## 2. Pyramid / layers
| Level | BR-* | Why this layer (cost vs risk) |
|---|---|---|
| Unit | BR-001, BR-003 | Subtotal and discount math (price × qty, percentage reduction) are pure calculations — cheapest, fastest place to pin the arithmetic before testing it through the UI. |
| Contract / API | BR-004, BR-005 (SYS-002) | Payment approval is owned by the Payments API; a contract test on the authorization response shape protects checkout from upstream breakage without a full UI run. |
| UI-E2E (Playwright) | BR-001, BR-002, BR-003, BR-004 | Each rule has a user-visible happy path or rejection message the business cares about — one critical E2E per rule, not exhaustive combinatorics. |
| Manual / exploratory | — | Not called for by current evidence; revisit if visual/UX nuance emerges (e.g. coupon UI copy). |
| Perf / security | — | Out of scope for this document — no load or auth-bypass risk described; **open question**, not assumed absent. |

## 3. Environments and data
- Env: Not specified in the business-rules doc — **open question** (staging vs prod-like; real or stubbed Payments API).
- Data / PII / idempotency: Needs an in-stock product fixture with known price, a zero-stock product fixture, an active unexpired coupon, an expired coupon, and a valid shipping address. Exact fixture fields are not specified — **open question** (mirrors `checkout.plan.md`).
- Cleanup: The order created by the BR-004 happy path needs teardown/reset between runs to keep the suite idempotent — **assumption**, not stated in the doc.

## 4. Automation and ownership
- Who writes unit vs E2E: not specified — **assumption**: QA owns E2E (Playwright), dev owns unit/contract, per the toolkit's default split.
- Flaky policy: quarantine + owner, per toolkit convention.
- UI pattern: fixtures + role-based selectors (see `testflow-playwright` skill); matches the `data-testid` convention used by sibling TestFlow suites.

## 5. CI/CD
| Stage | What runs | Gate |
|---|---|---|
| PR | Unit (pricing / discount math) | Block on fail |
| Nightly | UI-E2E — BR-001 to BR-004 (happy path + critical negatives) | Report + flake track |
| Pre-prod / prod | Smoke on cart + checkout happy path; payment-failure alert | **Open question** — no release process described in the doc |

## 6. Observability
- Signals QA would watch: payment-approval error rate, coupon-rejection rate anomalies, cart-abandonment spike after add-to-cart failures. **Open question** — no logging/metrics stack named in the doc.

## 7. Release
- Canary / feature flags / rollback / smoke post-deploy: **open question** — not described. Recommend smoke on BR-004 (checkout happy path) post-deploy at minimum, since it is the P0 money path.

## 8. Metrics
- Escape defects on BR-004 (payment / order confirmation) — highest-value signal given P0 priority.
- Flake rate across the 4 nightly E2E specs.
- Meaningful coverage: all 4 `BR-*` have ≥1 E2E case (true today per `checkout.cases.md`) — not "100% UI coverage."
- MTTR for bugs surfaced via BR-004 failures (direct revenue impact).

## MVP vs mature
| | MVP | Mature |
|---|---|---|
| Automation | P0 UI happy path (BR-001, BR-004) + unit on pricing/discount; BR-002/BR-003 covered manually at first | Full 4-BR E2E suite (current state) + contract test on the Payments API (BR-005) + flake quarantine |
| CI | PR unit only; E2E run manually before release | PR unit + nightly E2E gate (current `testflow-ci.yml` shape) + pre-prod smoke |

## Playwright candidates
- BR-001, BR-002, BR-003, BR-004 (UI-E2E — all four already generated under `tests/`)

## Deferred (non-UI)
- BR-005 (SYS-002 — Payments API) → contract/API level; no UI-E2E candidate from this document.

## Open questions / assumptions
- Authentication flow for "authenticated user" (seed storage state vs real login) — not specified (mirrors `checkout.plan.md`).
- Exact product/catalog fixture shape (SKU, price, stock fields) — not specified.
- Where the coupon's registered percentage is displayed (line item vs grand total) — not specified.
- Declined/failed payment path — **not in the business-rules doc**; no scenario invented, matches the existing gap in `checkout.cases.md`.
- Valid-address validation rules — not specified.
- Environment, PII handling, release process, and observability stack — all open questions; no infrastructure is described in the source document.
