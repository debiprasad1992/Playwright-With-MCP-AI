import { test, expect } from '@playwright/test';
import Ajv from 'ajv';
import dotenv from 'dotenv';
import path from 'node:path';
import { Routes } from '../../api/endpoints/routes';
import { DataProvider } from '../../utils/DataReader';

dotenv.config();

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: { rate: number; count: number };
}

const BASE_URL = process.env.API_BASE_URL || Routes.BASE_URL;
const PRODUCT_ID = Number(process.env.PRODUCT_ID || 1);
const LIMIT = Number(process.env.LIMIT || 3);

const createdProduct = {
  title: 'Playwright API test product',
  price: 19.99,
  description: 'Deterministic product test data',
  image: 'https://example.com/product.png',
  category: 'electronics',
};

const updatedProduct = {
  title: 'Updated Playwright API test product',
  price: 24.99,
  description: 'Updated deterministic product test data',
  image: 'https://example.com/updated-product.png',
  category: 'electronics',
};

const productPath = (productId: number): string =>
  Routes.GET_PRODUCT_BY_ID.replace('{id}', String(productId));

const sortedProductsPath = (order: 'asc' | 'desc'): string =>
  Routes.GET_PRODUCTS_SORTED.replace('{order}', order);

test.describe('FakeStore Products API Tests', () => {
  test('GET - All products @master @sanity @api', async ({ request }) => {
    const response = await request.get(`${BASE_URL}${Routes.GET_ALL_PRODUCTS}`);
    expect(response.status(), 'GET all products should return HTTP 200').toBe(200);

    const products = await response.json() as Product[];
    expect(Array.isArray(products), 'Products response should be an array').toBe(true);
    expect(products.length, 'At least one product should be returned').toBeGreaterThan(0);

    for (const product of products) {
      expect(typeof product.id, 'Product ID should be numeric').toBe('number');
      expect(typeof product.title, 'Product title should be a string').toBe('string');
      expect(typeof product.price, 'Product price should be numeric').toBe('number');
      expect(typeof product.category, 'Product category should be a string').toBe('string');
      expect(typeof product.image, 'Product image should be a string').toBe('string');
    }
  });

  test('GET - Product by ID @master @api', async ({ request }) => {
    const response = await request.get(`${BASE_URL}${productPath(PRODUCT_ID)}`);
    expect(response.status(), 'GET product by ID should return HTTP 200').toBe(200);

    const product = await response.json() as Product;
    expect(product.id, 'Returned product ID should match the requested ID').toBe(PRODUCT_ID);
    expect(product.title.length, 'Product title should not be empty').toBeGreaterThan(0);
    expect(product.price, 'Product price should be positive').toBeGreaterThan(0);
    expect(product.category.length, 'Product category should not be empty').toBeGreaterThan(0);
    expect(product.image.length, 'Product image URL should not be empty').toBeGreaterThan(0);
  });

  test('GET - Products with limit @master @api', async ({ request }) => {
    const route = Routes.GET_PRODUCTS_WITH_LIMIT.replace('{limit}', String(LIMIT));
    const response = await request.get(`${BASE_URL}${route}`);
    expect(response.status(), 'Limited products request should return HTTP 200').toBe(200);

    const products = await response.json() as Product[];
    expect(Array.isArray(products), 'Limited products response should be an array').toBe(true);
    expect(products.length, 'Returned product count should match the configured limit').toBe(LIMIT);
  });

  test('GET - Products sorted ascending @master @api', async ({ request }) => {
    const response = await request.get(`${BASE_URL}${sortedProductsPath('asc')}`);
    expect(response.status(), 'Ascending sort should return HTTP 200').toBe(200);

    const products = await response.json() as Product[];
    const ids = products.map(({ id }) => id);
    expect(ids, 'Product IDs should be in ascending order').toEqual([...ids].sort((a, b) => a - b));
  });

  test('GET - Products sorted descending @master @api', async ({ request }) => {
    const response = await request.get(`${BASE_URL}${sortedProductsPath('desc')}`);
    expect(response.status(), 'Descending sort should return HTTP 200').toBe(200);

    const products = await response.json() as Product[];
    const ids = products.map(({ id }) => id);
    expect(ids, 'Product IDs should be in descending order').toEqual([...ids].sort((a, b) => b - a));
  });

  test('GET - All product categories @master @api', async ({ request }) => {
    const response = await request.get(`${BASE_URL}${Routes.GET_ALL_CATEGORIES}`);
    expect(response.status(), 'GET product categories should return HTTP 200').toBe(200);

    const categories = await response.json() as string[];
    expect(Array.isArray(categories), 'Categories response should be an array').toBe(true);
    expect(categories.length, 'At least one category should be returned').toBeGreaterThan(0);
  });

  test('GET - Products by category @master @api', async ({ request }) => {
    const category = 'electronics';
    const route = Routes.GET_PRODUCTS_BY_CATEGORY.replace('{category}', category);
    const response = await request.get(`${BASE_URL}${route}`);
    expect(response.status(), 'Category products request should return HTTP 200').toBe(200);

    const products = await response.json() as Product[];
    expect(Array.isArray(products), 'Category products response should be an array').toBe(true);
    expect(products.length, 'The selected category should contain products').toBeGreaterThan(0);
    expect(products.every((product) => product.category === category),
      'Every returned product should belong to the requested category').toBe(true);
  });

  test('POST - Create product @master @api', async ({ request }) => {
    const response = await request.post(`${BASE_URL}${Routes.CREATE_PRODUCT}`, {
      data: createdProduct,
    });
    expect(response.status(), 'Create product should return HTTP 201').toBe(201);

    const product = await response.json() as Product;
    expect(product.id, 'Created product should have a numeric ID').toEqual(expect.any(Number));
    expect(product.title, 'Created product title should match the request').toBe(createdProduct.title);
    expect(product.price, 'Created product price should match the request').toBe(createdProduct.price);
    expect(product.description, 'Created product description should match the request').toBe(createdProduct.description);
    expect(product.category, 'Created product category should match the request').toBe(createdProduct.category);
    expect(product.image, 'Created product image should match the request').toBe(createdProduct.image);
  });

  test('PUT - Update product @master @api', async ({ request }) => {
    const route = Routes.UPDATE_PRODUCT.replace('{id}', String(PRODUCT_ID));
    const response = await request.put(`${BASE_URL}${route}`, { data: updatedProduct });
    expect(response.status(), 'Update product should return HTTP 200').toBe(200);

    const product = await response.json() as Product;
    expect(product.id, 'Updated product ID should match the requested ID').toBe(PRODUCT_ID);
    expect(product.title, 'Updated product title should match the request').toBe(updatedProduct.title);
    expect(product.price, 'Updated product price should match the request').toBe(updatedProduct.price);
    expect(product.description, 'Updated product description should match the request').toBe(updatedProduct.description);
  });

  test('DELETE - Product @master @api', async ({ request }) => {
    const route = Routes.DELETE_PRODUCT.replace('{id}', String(PRODUCT_ID));
    const response = await request.delete(`${BASE_URL}${route}`);
    expect(response.status(), 'Delete product should return HTTP 200').toBe(200);

    const deletedProduct = await response.json() as Product;
    expect(deletedProduct.id, 'Delete response should identify the requested product').toBe(PRODUCT_ID);
  });

  test('GET - Product response schema @master @api', async ({ request }) => {
    const response = await request.get(`${BASE_URL}${productPath(PRODUCT_ID)}`);
    expect(response.status(), 'Product schema request should return HTTP 200').toBe(200);

    const product = await response.json();
    const schema = DataProvider.readJson(path.resolve(__dirname, '../../api/schemas/product_api_schema.json'));
    const validate = new Ajv().compile(schema);
    const isValid = validate(product);
    expect(isValid, `Product schema validation errors: ${JSON.stringify(validate.errors)}`).toBe(true);
  });

  test('Workflow - Create, update and delete product @master @regression @api', async ({ request }) => {
    const createResponse = await request.post(`${BASE_URL}${Routes.CREATE_PRODUCT}`, {
      data: createdProduct,
    });
    expect(createResponse.status(), 'Workflow product creation should return HTTP 201').toBe(201);

    const created = await createResponse.json() as Product;
    expect(created.id, 'Workflow should receive a product ID').toEqual(expect.any(Number));

    const updateRoute = Routes.UPDATE_PRODUCT.replace('{id}', String(created.id));
    const updateResponse = await request.put(`${BASE_URL}${updateRoute}`, { data: updatedProduct });
    expect(updateResponse.status(), 'Workflow product update should return HTTP 200').toBe(200);

    const updated = await updateResponse.json() as Product;
    expect(updated.id, 'Workflow update should use the created product ID').toBe(created.id);
    expect(updated.title, 'Workflow update should return the changed title').toBe(updatedProduct.title);

    const deleteRoute = Routes.DELETE_PRODUCT.replace('{id}', String(created.id));
    const deleteResponse = await request.delete(`${BASE_URL}${deleteRoute}`);
    expect(deleteResponse.status(), 'Workflow product deletion should return HTTP 200').toBe(200);
  });
});
