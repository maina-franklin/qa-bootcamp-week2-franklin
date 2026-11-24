import { test, expect } from '@playwright/test';

test('search for pliers returns matching products', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');

  await page.getByRole('textbox', { name: 'Search' }).fill('pliers');
  await page.getByRole('button', { name: 'Search' }).click();

  const pliersHeading = page.getByRole('heading', { level: 5, name: /pliers/i }).first();
  await expect(pliersHeading).toBeVisible();
});