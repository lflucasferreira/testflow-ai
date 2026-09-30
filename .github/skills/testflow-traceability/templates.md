# Traceability templates

## Plan (`specs/checkout.plan.md`)

```markdown
# Checkout — test plan

Source: `docs/business-rules/example-checkout.md`

## 1. Happy path
### 1.1 Valid checkout completes
- BR: BR-001
- Intent: …

## 2. Negative
### 2.1 Reject empty cart
- BR: BR-002
- Intent: …

## Open questions
- …
```

## Case (`specs/checkout.cases.md`)

```markdown
## TC-001 — Valid checkout completes
- BR: BR-001
- Plan: 1.1
- Precondition: …
- Steps:
  1. …
- Expected: …
```

## Data (`specs/data/checkout.json`)

```json
{
  "TC-001": {
    "cart": { "items": [{ "sku": "SKU-1", "qty": 1 }] },
    "customer": { "email": "buyer@example.com" },
    "pendingFields": []
  }
}
```
