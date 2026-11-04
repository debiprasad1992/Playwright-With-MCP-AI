import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
import { Routes } from '../../api/endpoints/routes';

dotenv.config();

const BASE_URL = process.env.API_BASE_URL || Routes.BASE_URL;
const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;

test.describe('FakeStore Authentication API Tests', () => {
  test('POST - Successful login @master @sanity @api', async ({ request }) => {
    expect(USERNAME, 'USERNAME must be set in .env').toBeTruthy();
    expect(PASSWORD, 'PASSWORD must be set in .env').toBeTruthy();

    const response = await request.post(`${BASE_URL}${Routes.AUTH_LOGIN}`, {
      data: { username: USERNAME, password: PASSWORD },
    });

    expect(response.status(), 'Successful login should return HTTP 201').toBe(201);

    const responseBody = await response.json() as { token?: unknown };
    expect(typeof responseBody.token, 'Login response token should be a string').toBe('string');
    expect(String(responseBody.token).length, 'Login token should not be empty').toBeGreaterThan(0);
  });

  test('POST - Invalid login @master @api', async ({ request }) => {
    const response = await request.post(`${BASE_URL}${Routes.AUTH_LOGIN}`, {
      data: { username: 'invalid-user', password: 'invalid-password' },
    });

    expect(response.status(), 'Invalid login should return HTTP 401').toBe(401);
    const errorMessage = await response.text();
    expect(errorMessage, 'Invalid login should return the expected error message')
      .toBe('username or password is incorrect');
  });
});
