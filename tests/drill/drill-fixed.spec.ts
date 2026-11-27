import { test, expect } from '@playwright/test';
import path from 'path';
import { pathToFileURL } from 'url';

const drillUrl = pathToFileURL(path.join(__dirname, 'index.html')).href;

test('drill: message after Save (waits for the condition)', async ({ page }) => {
  await page.goto(drillUrl);
  await page.getByRole('button', { name: 'Save' }).click();

  await expect(page.locator('#status')).toHaveText('Saved');
});