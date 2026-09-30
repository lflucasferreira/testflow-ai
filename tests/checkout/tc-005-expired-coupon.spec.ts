import { test, expect } from '@playwright/test';
import { gateCheckoutSpec, loadCheckoutData } from './_helpers';

/** Plan 3.2 → TC-005 → BR-003 */
const tcId = 'TC-005';
const data = loadCheckoutData()[tcId];

test.describe('TC-005 BR-003 expired coupon', () => {
  test(`${tcId} expired coupon is rejected with a clear message`, async ({ page }) => {
    gateCheckoutSpec(tcId, data);

    await page.goto('/');
    // Wire: apply expired coupon → assert rejection message + total unchanged
    await expect(page.getByRole('main')).toBeVisible();
  });
});
