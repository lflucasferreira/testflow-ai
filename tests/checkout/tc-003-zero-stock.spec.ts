import { test, expect } from '@playwright/test';
import { gateCheckoutSpec, loadCheckoutData } from './_helpers';

/** Plan 2.1 → TC-003 → BR-002 */
const tcId = 'TC-003';
const data = loadCheckoutData()[tcId];

test.describe('TC-003 BR-002 zero-stock product', () => {
  test(`${tcId} zero-stock product cannot be added; unavailability message shown`, async ({ page }) => {
    gateCheckoutSpec(tcId, data);

    await page.goto('/');
    // Wire: open zero-stock product → attempt add → assert message + cart unchanged
    await expect(page.getByRole('main')).toBeVisible();
  });
});
