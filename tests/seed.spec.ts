import { test, expect } from '@playwright/test';

/**
 * Environment anchor and style example for planner/generator.
 * Not product coverage — keep this file minimal and offline-friendly.
 */
test.describe('seed', () => {
  test('environment ready', async ({ page }) => {
    await page.setContent(`
      <main>
        <h1>TestFlow seed</h1>
        <label>Seed input <input aria-label="Seed input" /></label>
      </main>
    `);
    await expect(page.getByRole('heading', { name: 'TestFlow seed' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Seed input' })).toBeVisible();
  });
});
