import { test, expect } from '@playwright/test';

test('GET products returns 200 and a list of products', async ({ request }) => {
  const response = await request.get('https://api.practicesoftwaretesting.com/products');

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.data.length).toBeGreaterThan(0);
});