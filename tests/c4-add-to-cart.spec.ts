import { test, expect } from '@playwright/test';

const API = 'https://api.practicesoftwaretesting.com';

test.describe('C4 Add to a cart', () => {
  let cartId: string | undefined;

  test.afterEach(async ({ request }) => {
    if (cartId) {
      const response = await request.delete(`${API}/carts/${cartId}`);
      expect(response.status()).toBe(204);
      cartId = undefined;
    }
  });

  test('C4 Add to a cart', async ({ request }) => {
    const productsResponse = await request.get(`${API}/products`);
    expect(productsResponse.status()).toBe(200);
    const products = await productsResponse.json();
    const productId: string = products.data[0].id;

    const createResponse = await request.post(`${API}/carts`);
    expect(createResponse.status()).toBe(201);
    const created = await createResponse.json();
    cartId = created.id;
    expect(cartId).toBeTruthy();

    const addResponse = await request.post(`${API}/carts/${cartId}`, {
      data: { product_id: productId, quantity: 1 },
    });
    expect(addResponse.status()).toBe(200);

    const cartResponse = await request.get(`${API}/carts/${cartId}`);
    expect(cartResponse.status()).toBe(200);
    const cart = await cartResponse.json();
    const productIdsInCart = cart.cart_items.map(
      (item: { product: { id: string } }) => item.product.id
    );
    expect(productIdsInCart).toContain(productId);
  });
});