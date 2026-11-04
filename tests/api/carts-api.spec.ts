import { test, expect } from '@playwright/test';
import Ajv from 'ajv';
import dotenv from 'dotenv';
import path from 'node:path';
import { Routes } from '../../api/endpoints/routes';
import { DataProvider } from '../../utils/DataReader';

dotenv.config();

interface CartProduct {
  productId: number;
  quantity: number;
}

interface Cart {
  id: number;
  userId: number;
  date: string;
  products: CartProduct[];
  __v?: number;
}

const BASE_URL = process.env.API_BASE_URL || Routes.BASE_URL;
const CART_ID = Number(process.env.CART_ID || 1);
const USER_ID = Number(process.env.USER_ID || 1);
const LIMIT = Number(process.env.LIMIT || 3);
const START_DATE = process.env.START_DATE || '2019-12-10';
const END_DATE = process.env.END_DATE || '2020-10-10';

const createdCart = {
  userId: USER_ID,
  date: START_DATE,
  products: [{ productId: 1, quantity: 2 }],
};

const updatedCart = {
  ...createdCart,
  products: [{ productId: 1, quantity: 5 }],
};

const cartPath = (cartId: number): string =>
  Routes.GET_CART_BY_ID.replace('{id}', String(cartId));

const sortedCartsPath = (order: 'asc' | 'desc'): string =>
  Routes.GET_CARTS_SORTED.replace('{order}', order);

test.describe('FakeStore Carts API Tests', () => {
  test('GET - All carts @master @sanity @api', async ({ request }) => {
    const response = await request.get(`${BASE_URL}${Routes.GET_ALL_CARTS}`);
    expect(response.status(), 'GET all carts should return HTTP 200').toBe(200);

    const carts = await response.json() as Cart[];
    expect(Array.isArray(carts), 'Carts response should be an array').toBe(true);
    expect(carts.length, 'At least one cart should be returned').toBeGreaterThan(0);
  });

  test('GET - Cart by ID @master @api', async ({ request }) => {
    const response = await request.get(`${BASE_URL}${cartPath(CART_ID)}`);
    expect(response.status(), 'GET cart by ID should return HTTP 200').toBe(200);

    const cart = await response.json() as Cart;
    expect(cart.id, 'Returned cart ID should match the requested ID').toBe(CART_ID);
    expect(cart.products.length, 'Cart should contain at least one product').toBeGreaterThan(0);
  });

  test('GET - Carts within date range @master @api', async ({ request }) => {
    const route = Routes.GET_CARTS_BY_DATE_RANGE
      .replace('{startdate}', START_DATE)
      .replace('{enddate}', END_DATE);
    const response = await request.get(`${BASE_URL}${route}`);
    expect(response.status(), 'Date-filtered carts request should return HTTP 200').toBe(200);

    const carts = await response.json() as Cart[];
    expect(Array.isArray(carts), 'Date-filtered carts response should be an array').toBe(true);
    const start = Date.parse(START_DATE);
    const end = Date.parse(END_DATE);
    expect(carts.every((cart) => {
      const date = Date.parse(cart.date);
      return date >= start && date <= end;
    }), 'Every returned cart date should be within the requested range').toBe(true);
  });

  test('GET - Carts by user @master @api', async ({ request }) => {
    const route = Routes.GET_USER_CART.replace('{userId}', String(USER_ID));
    const response = await request.get(`${BASE_URL}${route}`);
    expect(response.status(), 'User carts request should return HTTP 200').toBe(200);

    const carts = await response.json() as Cart[];
    expect(Array.isArray(carts), 'User carts response should be an array').toBe(true);
    expect(carts.length, 'Configured user should have at least one cart').toBeGreaterThan(0);
    expect(carts.every((cart) => cart.userId === USER_ID),
      'Every returned cart should belong to the requested user').toBe(true);
  });

  test('GET - Carts with limit @master @api', async ({ request }) => {
    const route = Routes.GET_CARTS_WITH_LIMIT.replace('{limit}', String(LIMIT));
    const response = await request.get(`${BASE_URL}${route}`);
    expect(response.status(), 'Limited carts request should return HTTP 200').toBe(200);

    const carts = await response.json() as Cart[];
    expect(Array.isArray(carts), 'Limited carts response should be an array').toBe(true);
    expect(carts.length, 'Returned cart count should match the configured limit').toBe(LIMIT);
  });

  test('GET - Carts sorted ascending @master @api', async ({ request }) => {
    const response = await request.get(`${BASE_URL}${sortedCartsPath('asc')}`);
    expect(response.status(), 'Ascending sort should return HTTP 200').toBe(200);

    const carts = await response.json() as Cart[];
    const ids = carts.map(({ id }) => id);
    expect(ids, 'Cart IDs should be in ascending order').toEqual([...ids].sort((a, b) => a - b));
  });

  test('GET - Carts sorted descending @master @api', async ({ request }) => {
    const response = await request.get(`${BASE_URL}${sortedCartsPath('desc')}`);
    expect(response.status(), 'Descending sort should return HTTP 200').toBe(200);

    const carts = await response.json() as Cart[];
    const ids = carts.map(({ id }) => id);
    expect(ids, 'Cart IDs should be in descending order').toEqual([...ids].sort((a, b) => b - a));
  });

  test('POST - Create cart @master @api', async ({ request }) => {
    const response = await request.post(`${BASE_URL}${Routes.CREATE_CART}`, { data: createdCart });
    expect(response.status(), 'Create cart should return HTTP 201').toBe(201);

    const cart = await response.json() as Cart;
    expect(cart.id, 'Created cart should have a numeric ID').toEqual(expect.any(Number));
    expect(cart.userId, 'Created cart user should match the request').toBe(createdCart.userId);
    expect(cart.products, 'Created cart products should match the request').toEqual(createdCart.products);
  });

  test('PUT - Update cart @master @api', async ({ request }) => {
    const route = Routes.UPDATE_CART.replace('{id}', String(CART_ID));
    const response = await request.put(`${BASE_URL}${route}`, { data: updatedCart });
    expect(response.status(), 'Update cart should return HTTP 200').toBe(200);

    const cart = await response.json() as Cart;
    expect(cart.id, 'Updated cart ID should match the requested ID').toBe(CART_ID);
    expect(cart.userId, 'Updated cart user should match the request').toBe(updatedCart.userId);
    expect(cart.products[0].quantity, 'Updated cart quantity should match the request').toBe(5);
  });

  test('DELETE - Cart @master @api', async ({ request }) => {
    const route = Routes.DELETE_CART.replace('{id}', String(CART_ID));
    const response = await request.delete(`${BASE_URL}${route}`);
    expect(response.status(), 'Delete cart should return HTTP 200').toBe(200);

    const deletedCart = await response.json() as Cart;
    expect(deletedCart.id, 'Delete response should identify the requested cart').toBe(CART_ID);
  });

  test('GET - Cart response schema @master @api', async ({ request }) => {
    const response = await request.get(`${BASE_URL}${cartPath(CART_ID)}`);
    expect(response.status(), 'Cart schema request should return HTTP 200').toBe(200);

    const cart = await response.json();
    const schema = DataProvider.readJson(path.resolve(__dirname, '../../api/schemas/cart_api_schema.json'));
    const validate = new Ajv().compile(schema);
    const isValid = validate(cart);
    expect(isValid, `Cart schema validation errors: ${JSON.stringify(validate.errors)}`).toBe(true);
  });

  test('Workflow - Create, update and delete cart @master @regression @api', async ({ request }) => {
    const createResponse = await request.post(`${BASE_URL}${Routes.CREATE_CART}`, { data: createdCart });
    expect(createResponse.status(), 'Workflow cart creation should return HTTP 201').toBe(201);

    const created = await createResponse.json() as Cart;
    expect(created.id, 'Workflow should receive a cart ID').toEqual(expect.any(Number));
    expect(created.userId, 'Workflow cart should retain the requested user ID').toBe(createdCart.userId);
    expect(created.products, 'Workflow cart should retain the requested products').toEqual(createdCart.products);

    const updateRoute = Routes.UPDATE_CART.replace('{id}', String(created.id));
    const updateResponse = await request.put(`${BASE_URL}${updateRoute}`, { data: updatedCart });
    expect(updateResponse.status(), 'Workflow cart update should return HTTP 200').toBe(200);

    const updated = await updateResponse.json() as Cart;
    expect(updated.id, 'Workflow update should use the created cart ID').toBe(created.id);
    expect(updated.products[0].quantity, 'Workflow should return the updated quantity').toBe(5);

    const deleteRoute = Routes.DELETE_CART.replace('{id}', String(created.id));
    const deleteResponse = await request.delete(`${BASE_URL}${deleteRoute}`);
    expect(deleteResponse.status(), 'Workflow cart deletion should return HTTP 200').toBe(200);
  });
});
