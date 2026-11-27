import { test, expect } from '@playwright/test';
import { SearchPage } from '../pages/search-page';

test('C1 Search by name', async ({ page }) => {
  test.setTimeout(90000);

  const searchPage = new SearchPage(page);

  await searchPage.goto();
  await searchPage.search('pliers');

  await expect(async () => {
    const names = await searchPage.getProductNames();
    expect(names.length).toBeGreaterThan(0);
    for (const name of names) {
      expect(name.toLowerCase()).toContain('pliers');
    }
  }).toPass({ timeout: 60000 });
});