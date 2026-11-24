import { test, expect } from '@playwright/test';

test('search for pliers returns only products with pliers in the name', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');

  await page.getByRole('textbox', { name: 'Search' }).fill('pliers');
  await page.getByRole('button', { name: 'Search' }).click();

  const productNames = page.getByRole('heading', { level: 5 });

  await expect(async () => {
    const names = (await productNames.allTextContents())
      .map((name) => name.trim())
      .filter((name) => name !== '');
    expect(names.length).toBeGreaterThan(0);
    for (const name of names) {
      expect(name.toLowerCase()).toContain('pliers');
    }
  }).toPass({ timeout: 20000 });
});