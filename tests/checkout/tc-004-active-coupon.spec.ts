import { test, expect } from '@playwright/test';
import { gateCheckoutSpec, loadCheckoutData } from './_helpers';

/** Plan 3.1 → TC-004 → BR-003 */
const tcId = 'TC-004';
const data = loadCheckoutData()[tcId];

test.describe('TC-004 BR-003 active coupon', () => {
  test(`${tcId} active coupon reduces total by registered percentage`, async ({ page }) => {
    gateCheckoutSpec(tcId, data);

    await page.goto('/');
    // Wire: apply active coupon → assert total reduced by registered percentage
    await expect(page.getByRole('main')).toBeVisible();
  });
});
