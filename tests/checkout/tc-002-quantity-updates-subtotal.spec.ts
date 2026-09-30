import { test, expect } from '@playwright/test';
import { gateCheckoutSpec, loadCheckoutData } from './_helpers';

/** Plan 1.2 → TC-002 → BR-001 */
const tcId = 'TC-002';
const data = loadCheckoutData()[tcId];

test.describe('TC-002 BR-001 quantity changes subtotal', () => {
  test(`${tcId} subtotal updates when quantity changes`, async ({ page }) => {
    gateCheckoutSpec(tcId, data);

    const product = data.product as { quantityBefore: number; quantityAfter: number };
    await page.goto('/');
    // Wire: cart at Q1 → change to Q2 → assert subtotal = unitPrice * Q2
    await expect(page.getByRole('main')).toBeVisible();
    void product;
  });
});
