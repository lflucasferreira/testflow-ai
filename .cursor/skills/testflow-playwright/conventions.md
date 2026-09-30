# Playwright conventions

## Selectors (priority)

1. `getByRole(…, { name })`
2. `getByLabel` / `getByPlaceholder`
3. `getByTestId`
4. `getByText` only for unique, stable copy

Avoid: nth-of-type chains, absolute XPath, class soup tied to layout.

## Assertions

- Assert user-visible outcomes (URL, role, text, value), not implementation details.
- Prefer Playwright web-first assertions (`expect(locator).toBeVisible()`).
- Soft-expect only when collecting multiple independent checks in one case.

## Fixtures

- Load JSON from `specs/data/` keyed by `TC-*`.
- Shared mutable state across tests → smell; isolate or reset in `beforeEach`.
- Auth/storage: prefer project dependency or stored state from seed — not credentials in spec bodies.
