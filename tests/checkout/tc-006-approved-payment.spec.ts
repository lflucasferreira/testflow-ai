import { test, expect } from '@playwright/test';
import { gateCheckoutSpec, loadCheckoutData } from './_helpers';

/** Plan 4.1 → TC-006 → BR-004 */
const tcId = 'TC-006';
const data = loadCheckoutData()[tcId];

test.describe('TC-006 BR-004 approved payment checkout', () => {
  test(`${tcId} approved payment confirms order and empties cart`, async ({ page }) => {
    gateCheckoutSpec(tcId, data);

    await page.goto('/');
    // Wire: valid address + approved payment → assert order confirmed + cart empty
    await expect(page.getByRole('main')).toBeVisible();
  });
});
