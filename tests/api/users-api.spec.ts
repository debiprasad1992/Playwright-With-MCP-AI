import { test, expect } from '@playwright/test';
import Ajv from 'ajv';
import dotenv from 'dotenv';
import path from 'node:path';
import { Routes } from '../../api/endpoints/routes';
import { DataProvider } from '../../utils/DataReader';

dotenv.config();

interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  name: { firstname: string; lastname: string };
  address: {
    geolocation: { lat: string; long: string };
    city: string;
    street: string;
    number: number;
    zipcode: string;
  };
  phone: string;
  __v?: number;
}

type UserUpdateResponse = Omit<User, 'id' | '__v'> & {
  id?: number;
  __v?: number;
};

const BASE_URL = process.env.API_BASE_URL || Routes.BASE_URL;
const USER_ID = Number(process.env.USER_ID || 1);
const LIMIT = Number(process.env.LIMIT || 3);

const createdUser = {
  email: 'playwright.api.user@example.com',
  username: 'playwright-api-user',
  password: 'TestPass123!',
  name: { firstname: 'Api', lastname: 'Tester' },
  address: {
    geolocation: { lat: '0', long: '0' },
    city: 'Test City',
    street: 'Test Street',
    number: 10,
    zipcode: '12345',
  },
  phone: '555-0100',
};

const updatedUser = {
  ...createdUser,
  username: 'updated-playwright-api-user',
  name: { firstname: 'Updated', lastname: 'Tester' },
};

const userPath = (userId: number): string =>
  Routes.GET_USER_BY_ID.replace('{id}', String(userId));

const sortedUsersPath = (order: 'asc' | 'desc'): string =>
  Routes.GET_USERS_SORTED.replace('{order}', order);

test.describe('FakeStore Users API Tests', () => {
  test('GET - All users @master @sanity @api', async ({ request }) => {
    const response = await request.get(`${BASE_URL}${Routes.GET_ALL_USERS}`);
    expect(response.status(), 'GET all users should return HTTP 200').toBe(200);

    const users = await response.json() as User[];
    expect(Array.isArray(users), 'Users response should be an array').toBe(true);
    expect(users.length, 'At least one user should be returned').toBeGreaterThan(0);
    for (const user of users) {
      expect(typeof user.id, 'User ID should be numeric').toBe('number');
      expect(typeof user.email, 'User email should be a string').toBe('string');
    }
  });

  test('GET - User by ID @master @api', async ({ request }) => {
    const response = await request.get(`${BASE_URL}${userPath(USER_ID)}`);
    expect(response.status(), 'GET user by ID should return HTTP 200').toBe(200);

    const user = await response.json() as User;
    expect(user.id, 'Returned user ID should match the requested ID').toBe(USER_ID);
    expect(user.email.length, 'User email should not be empty').toBeGreaterThan(0);
  });

  test('GET - Users with limit @master @api', async ({ request }) => {
    const route = Routes.GET_USERS_WITH_LIMIT.replace('{limit}', String(LIMIT));
    const response = await request.get(`${BASE_URL}${route}`);
    expect(response.status(), 'Limited users request should return HTTP 200').toBe(200);

    const users = await response.json() as User[];
    expect(Array.isArray(users), 'Limited users response should be an array').toBe(true);
    expect(users.length, 'Returned user count should match the configured limit').toBe(LIMIT);
  });

  test('GET - Users sorted ascending @master @api', async ({ request }) => {
    const response = await request.get(`${BASE_URL}${sortedUsersPath('asc')}`);
    expect(response.status(), 'Ascending sort should return HTTP 200').toBe(200);

    const users = await response.json() as User[];
    const ids = users.map(({ id }) => id);
    expect(ids, 'User IDs should be in ascending order').toEqual([...ids].sort((a, b) => a - b));
  });

  test('GET - Users sorted descending @master @api', async ({ request }) => {
    const response = await request.get(`${BASE_URL}${sortedUsersPath('desc')}`);
    expect(response.status(), 'Descending sort should return HTTP 200').toBe(200);

    const users = await response.json() as User[];
    const ids = users.map(({ id }) => id);
    expect(ids, 'User IDs should be in descending order').toEqual([...ids].sort((a, b) => b - a));
  });

  test('POST - Create user @master @api', async ({ request }) => {
    const response = await request.post(`${BASE_URL}${Routes.CREATE_USER}`, { data: createdUser });
    expect(response.status(), 'Create user should return HTTP 201').toBe(201);

    const user = await response.json() as { id?: unknown };
    expect(typeof user.id, 'Create response should contain a numeric user ID').toBe('number');
  });

  test('PUT - Update user @master @api', async ({ request }) => {
    const route = Routes.UPDATE_USER.replace('{id}', String(USER_ID));
    const response = await request.put(`${BASE_URL}${route}`, { data: updatedUser });
    expect(response.status(), 'Update user should return HTTP 200').toBe(200);

    const user = await response.json() as UserUpdateResponse;
    expect(user.username, 'Updated username should match the request').toBe(updatedUser.username);
    expect(user.name.firstname, 'Updated first name should match the request').toBe(updatedUser.name.firstname);
    expect(user.name.lastname, 'Updated last name should match the request').toBe(updatedUser.name.lastname);
  });

  test('DELETE - User @master @api', async ({ request }) => {
    const route = Routes.DELETE_USER.replace('{id}', String(USER_ID));
    const response = await request.delete(`${BASE_URL}${route}`);
    expect(response.status(), 'Delete user should return HTTP 200').toBe(200);

    const deletedUser = await response.json() as User;
    expect(deletedUser.id, 'Delete response should identify the requested user').toBe(USER_ID);
  });

  test('GET - User response schema @master @api', async ({ request }) => {
    const response = await request.get(`${BASE_URL}${userPath(USER_ID)}`);
    expect(response.status(), 'User schema request should return HTTP 200').toBe(200);

    const user = await response.json();
    const schema = DataProvider.readJson(path.resolve(__dirname, '../../api/schemas/user_api_schema.json'));
    const validate = new Ajv().compile(schema);
    const isValid = validate(user);
    expect(isValid, `User schema validation errors: ${JSON.stringify(validate.errors)}`).toBe(true);
  });

  test('Workflow - Create, update and delete user @master @regression @api', async ({ request }) => {
    const createResponse = await request.post(`${BASE_URL}${Routes.CREATE_USER}`, { data: createdUser });
    expect(createResponse.status(), 'Workflow user creation should return HTTP 201').toBe(201);

    const created = await createResponse.json() as { id: number };
    expect(created.id, 'Workflow should receive a user ID').toEqual(expect.any(Number));

    const updateRoute = Routes.UPDATE_USER.replace('{id}', String(created.id));
    const updateResponse = await request.put(`${BASE_URL}${updateRoute}`, { data: updatedUser });
    expect(updateResponse.status(), 'Workflow user update should return HTTP 200').toBe(200);

    const updated = await updateResponse.json() as UserUpdateResponse;
    expect(updated.username, 'Workflow update should return the changed username').toBe(updatedUser.username);

    const deleteRoute = Routes.DELETE_USER.replace('{id}', String(created.id));
    const deleteResponse = await request.delete(`${BASE_URL}${deleteRoute}`);
    expect(deleteResponse.status(), 'Workflow user deletion should return HTTP 200').toBe(200);
  });
});
