# Checkout (example)

Minimal document to exercise the agents. Replace with real product rules.

## BR-001 — Cart with a valid item

An authenticated user can add an available product to the cart. The subtotal reflects unit price × quantity.

## BR-002 — Unavailable product

A product with zero stock cannot be added to the cart. The UI shows an unavailability message.

## BR-003 — Valid coupon

An active, unexpired coupon reduces the total by the registered percentage. An expired coupon is rejected with a clear message.

## BR-004 — Checkout with approved payment

With a non-empty cart and a valid address, an approved payment creates a confirmed order and empties the cart.
