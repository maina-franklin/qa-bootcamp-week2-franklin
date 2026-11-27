import { test } from '@playwright/test';
import path from 'path';
import { pathToFileURL } from 'url';
import assert from 'assert';

const drillUrl = pathToFileURL(path.join(__dirname, 'index.html')).href;

test('drill: message after Save (fixed wait, plain check)', async ({ page }) => {
  await page.goto(drillUrl);
  await page.getByRole('button', { name: 'Save' }).click();

  await page.waitForTimeout(500);

  const message = await page.locator('#status').textContent();
  assert.strictEqual(message, 'Saved');
});