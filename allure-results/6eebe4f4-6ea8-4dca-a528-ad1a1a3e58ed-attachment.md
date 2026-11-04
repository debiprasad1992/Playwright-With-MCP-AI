# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\auth-api.spec.ts >> FakeStore Authentication API Tests >> POST - Successful login @master @sanity @api
- Location: tests\api\auth-api.spec.ts:12:7

# Error details

```
Error: Successful login should return HTTP 201

expect(received).toBe(expected) // Object.is equality

Expected: 201
Received: 401
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import dotenv from 'dotenv';
  3  | import { Routes } from '../../api/endpoints/routes';
  4  | 
  5  | dotenv.config();
  6  | 
  7  | const BASE_URL = process.env.API_BASE_URL || Routes.BASE_URL;
  8  | const USERNAME = process.env.USERNAME;
  9  | const PASSWORD = process.env.PASSWORD;
  10 | 
  11 | test.describe('FakeStore Authentication API Tests', () => {
  12 |   test('POST - Successful login @master @sanity @api', async ({ request }) => {
  13 |     expect(USERNAME, 'USERNAME must be set in .env').toBeTruthy();
  14 |     expect(PASSWORD, 'PASSWORD must be set in .env').toBeTruthy();
  15 | 
  16 |     const response = await request.post(`${BASE_URL}${Routes.AUTH_LOGIN}`, {
  17 |       data: { username: USERNAME, password: PASSWORD },
  18 |     });
  19 | 
> 20 |     expect(response.status(), 'Successful login should return HTTP 201').toBe(201);
     |                                                                          ^ Error: Successful login should return HTTP 201
  21 | 
  22 |     const responseBody = await response.json() as { token?: unknown };
  23 |     expect(typeof responseBody.token, 'Login response token should be a string').toBe('string');
  24 |     expect(String(responseBody.token).length, 'Login token should not be empty').toBeGreaterThan(0);
  25 |   });
  26 | 
  27 |   test('POST - Invalid login @master @api', async ({ request }) => {
  28 |     const response = await request.post(`${BASE_URL}${Routes.AUTH_LOGIN}`, {
  29 |       data: { username: 'invalid-user', password: 'invalid-password' },
  30 |     });
  31 | 
  32 |     expect(response.status(), 'Invalid login should return HTTP 401').toBe(401);
  33 |     const errorMessage = await response.text();
  34 |     expect(errorMessage, 'Invalid login should return the expected error message')
  35 |       .toBe('username or password is incorrect');
  36 |   });
  37 | });
  38 | 
```