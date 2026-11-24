import { test, expect } from '@playwright/test';

test('invalid login shows error message', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/auth/login');

  await page.getByLabel('Email address').fill('invalid@example.com');
  await page.getByPlaceholder('Your password').fill('WrongPassword123!');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('Invalid email or password')).toBeVisible();
});