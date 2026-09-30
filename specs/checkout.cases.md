# Checkout — test cases

Source plan: `specs/checkout.plan.md`  
Business rules: `docs/business-rules/example-checkout.md`

## TC-001 — Add available product; subtotal = price × qty
- BR: BR-001
- Plan: 1.1
- Precondition: User is authenticated. An available product exists with known unit price. Cart may be empty.
- Steps:
  1. Open the product that is available.
  2. Set quantity ≥ 1.
  3. Add the product to the cart.
  4. Open the cart and read the subtotal.
- Expected: Product is in the cart. Subtotal equals unit price × quantity.

## TC-002 — Subtotal updates when quantity changes
- BR: BR-001
- Plan: 1.2
- Precondition: Authenticated user; available product already in cart (or addable) with known unit price.
- Steps:
  1. Ensure the product is in the cart at quantity Q1.
  2. Change quantity to Q2 (Q2 ≠ Q1, Q2 ≥ 1).
  3. Read the cart subtotal.
- Expected: Subtotal equals unit price × Q2.

## TC-003 — Zero-stock product cannot be added
- BR: BR-002
- Plan: 2.1
- Precondition: Authenticated user. A product with zero stock is visible. Cart state is known (item count / contents).
- Steps:
  1. Open the zero-stock product.
  2. Attempt to add it to the cart.
  3. Observe UI message and cart contents.
- Expected: Product is not added. An unavailability message is shown. Cart remains unchanged.

## TC-004 — Active coupon reduces total by registered percentage
- BR: BR-003
- Plan: 3.1
- Precondition: Authenticated user; non-empty cart with a known total before discount; an active, unexpired coupon with a registered percentage exists.
- Steps:
  1. Open cart/checkout where coupons apply.
  2. Apply the active coupon.
  3. Read the total after discount.
- Expected: Total is reduced by the coupon’s registered percentage. No rejection message.

## TC-005 — Expired coupon is rejected
- BR: BR-003
- Plan: 3.2
- Precondition: Authenticated user; non-empty cart with known total; an expired coupon code is available for the test.
- Steps:
  1. Open cart/checkout where coupons apply.
  2. Apply the expired coupon.
  3. Read total and UI message.
- Expected: Coupon is rejected with a clear message. Total is unchanged.

## TC-006 — Approved payment confirms order and empties cart
- BR: BR-004
- Plan: 4.1
- Precondition: Authenticated user; non-empty cart; a valid address can be provided; payment will be approved.
- Steps:
  1. Proceed to checkout with the non-empty cart.
  2. Provide a valid address.
  3. Submit payment that is approved.
  4. Observe order confirmation and cart.
- Expected: Order is confirmed. Cart is empty.

## Gaps (not generated)

- Declined/failed payment — not in business rules (plan open question).
- Address field validation rules — not specified in the document.
