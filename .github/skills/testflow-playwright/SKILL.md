---
name: testflow-playwright
description: >-
  Playwright conventions for TestFlow: seed, selectors, one-spec-per-case,
  fixtures, and config bootstrap. Use when generating or editing tests/**/*.spec.ts,
  playwright.config.ts, or test data fixtures for automation.
---

# TestFlow Playwright

## Layout

```text
playwright.config.ts          # create minimal if missing
tests/seed.spec.ts            # environment anchor / style example only
tests/<feature>/<tc-id>.spec.ts   # prefer one focused file per case (coverage)
specs/data/<feature>.json     # fixtures cited by TC-*
```

## Rules

1. Title or tag must carry `TC-*` matching the case.
2. Prefer `getByRole`, `getByLabel`, `getByTestId`. Avoid XPath and layout/CSS selectors.
3. Reuse fixtures from `specs/data/`; never hardcode secrets.
4. Do not invent domain fields absent from business rules — mark `pendingFields`.
5. Batch mode may group related cases; coverage/per-case mode → one spec file per scenario.
6. Do not run the full suite unless asked; if validating, run only the new/changed file.
7. Seed is setup/style context for the planner — not product coverage.

## Minimal seed shape

```ts
import { test, expect } from '@playwright/test';

test.describe('seed', () => {
  test('environment ready', async ({ page }) => {
    // Keep empty or smoke-only; generator copies patterns from here.
    await expect(page).toBeDefined();
  });
});
```

## More

Selector and assertion notes: [conventions.md](conventions.md).
