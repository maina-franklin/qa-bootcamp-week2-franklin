import { test, expect } from '@playwright/test';
import { SearchPage } from '../pages/search-page';

test('search for pliers returns only products with pliers in the name', async ({ page }) => {
  const searchPage = new SearchPage(page);

  await searchPage.goto();
  await searchPage.search('pliers');

  await expect(async () => {
    const names = await searchPage.getProductNames();
    expect(names.length).toBeGreaterThan(0);
    for (const name of names) {
      expect(name.toLowerCase()).toContain('pliers');
    }
  }).toPass({ timeout: 20000 });
});