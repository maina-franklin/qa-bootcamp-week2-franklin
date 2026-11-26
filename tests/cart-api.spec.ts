import { test, expect, type APIRequestContext } from '@playwright/test';

const API = 'https://api.practicesoftwaretesting.com';

async function getFirstProductId(request: APIRequestContext): Promise<string> {
  const response = await request.get(`${API}/products`);
  expect(response.status()).toBe(200);
  const body = await response.json();
  return body.data[0].id;
}

test.describe('cart API', () => {
  let cartId: string | undefined;

   test.afterEach(async ({ request }) => {
    if (cartId) {
      const response = await request.delete(`${API}/carts/${cartId}`);
      expect(response.status()).toBe(204);
      cartId = undefined;
    }
  });

  test('create a cart, add a product, and read it back', async ({ request }) => {
    const productId = await getFirstProductId(request);

    const createResponse = await request.post(`${API}/carts`);
    expect(createResponse.status()).toBe(201);
    const created = await createResponse.json();
    cartId = created.id;
    expect(cartId).toBeTruthy();

    const addResponse = await request.post(`${API}/carts/${cartId}`, {
      data: { product_id: productId, quantity: 1 },
    });
    expect(addResponse.status()).toBe(200);
    const added = await addResponse.json();
    expect(added.result).toBe('item added or updated');

    const readResponse = await request.get(`${API}/carts/${cartId}`);
    expect(readResponse.status()).toBe(200);
    const cart = await readResponse.json();
    expect(cart.cart_items[0].quantity).toBe(1);
  });

  test('requesting a cart that does not exist returns 404', async ({ request }) => {
    const response = await request.get(`${API}/carts/invalid-cart-id-999`);
    expect(response.status()).toBe(404);
  });
});