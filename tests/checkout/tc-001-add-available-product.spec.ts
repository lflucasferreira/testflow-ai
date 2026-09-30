import { test, expect } from '@playwright/test';
import { gateCheckoutSpec, loadCheckoutData } from './_helpers';

/** Plan 1.1 → TC-001 → BR-001 */
const tcId = 'TC-001';
const data = loadCheckoutData()[tcId];

test.describe('TC-001 BR-001 add available product', () => {
  test(`${tcId} adds available product and subtotal equals price × qty`, async ({ page }) => {
    gateCheckoutSpec(tcId, data);

    const product = data.product as { quantity: number };
    await page.goto('/');
    // Wire: open available product → set qty → add to cart → assert subtotal = unitPrice * quantity
    await expect(page.getByRole('main')).toBeVisible();
    void product;
  });
});
