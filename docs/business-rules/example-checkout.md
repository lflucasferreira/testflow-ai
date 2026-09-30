# Checkout platform (example)

Minimal multi-system reference to exercise the agents. Replace with real product systems and rules.

Agents identify each `SYS-*`, design a **test strategy per system**, then plan scenarios from `BR-*` under that system. Do not invent systems or rules absent from this document.

## SYS-001 — Checkout Web

Storefront UI where authenticated shoppers manage cart, coupons, and payment.

### BR-001 — Cart with a valid item

An authenticated user can add an available product to the cart. The subtotal reflects unit price × quantity.

### BR-002 — Unavailable product

A product with zero stock cannot be added to the cart. The UI shows an unavailability message.

### BR-003 — Valid coupon

An active, unexpired coupon reduces the total by the registered percentage. An expired coupon is rejected with a clear message.

### BR-004 — Checkout with approved payment

With a non-empty cart and a valid address, an approved payment creates a confirmed order and empties the cart.

## SYS-002 — Payments API (example stub)

Backend payment authorization used by checkout. UI rules above depend on this system; detailed API contracts are not specified yet.

### BR-005 — Approved authorization

When the payment provider approves a charge for a valid cart total, the API returns an approved authorization result to the caller.
