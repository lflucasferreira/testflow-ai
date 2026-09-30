# Checkout — test plan

Source: `docs/business-rules/example-checkout.md`  
Seed context: `tests/seed.spec.ts` (offline environment anchor; product specs will need `BASE_URL` / real UI)  
Coverage: refreshed by `/testflow-coverage`

## 1. Cart — valid item (BR-001)

### 1.1 Authenticated user adds available product; subtotal = price × qty
- BR: BR-001
- Intent: Happy path — add one available SKU with quantity ≥ 1 and assert cart subtotal.

### 1.2 Subtotal updates when quantity changes
- BR: BR-001
- Intent: Boundary/happy — change qty and verify subtotal still follows unit price × quantity.

## 2. Cart — unavailable product (BR-002)

### 2.1 Zero-stock product cannot be added; UI shows unavailability message
- BR: BR-002
- Intent: Negative — attempt add on zero-stock item; cart unchanged; message visible.

## 3. Coupon (BR-003)

### 3.1 Active unexpired coupon reduces total by registered percentage
- BR: BR-003
- Intent: Happy path — apply valid coupon; total reflects discount %.

### 3.2 Expired coupon is rejected with a clear message
- BR: BR-003
- Intent: Negative — apply expired coupon; total unchanged; rejection message shown.

## 4. Checkout — approved payment (BR-004)

### 4.1 Non-empty cart + valid address + approved payment → confirmed order and empty cart
- BR: BR-004
- Intent: Happy path — complete checkout; order confirmed; cart empty afterward.

## Open questions

- Auth: how is “authenticated user” established in tests (seed storage state, login flow, fixture)? Not specified in the business-rules doc.
- Product catalog fields (SKU, price, stock): not named beyond availability / unit price — exact fixture shape pending until UI/API is known.
- BR-003: what constitutes “registered percentage” and where it is displayed (line item vs grand total)?
- BR-004: declined/failed payment behavior is not in the document → **gap** (no scenario invented).
- BR-004: “valid address” fields and validation rules are not specified.
- No real app URL yet — scenarios assume a future `BASE_URL`; seed alone is not product coverage.

## Covered `BR-*`

- BR-001
- BR-002
- BR-003
- BR-004

## Gaps before generate

None for listed rules: every `BR-*` has ≥1 plan scenario. Proceed to per-case generate.
