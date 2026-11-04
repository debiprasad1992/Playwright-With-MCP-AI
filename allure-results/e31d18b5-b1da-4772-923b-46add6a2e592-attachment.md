# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web\opencart-customer-journey.spec.ts >> OpenCart customer shopping journey test @master @web
- Location: tests\web\opencart-customer-journey.spec.ts:8:5

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost/opencart/upload/
Call log:
  - navigating to "http://localhost/opencart/upload/", waiting until "load"

```

# Test source

```ts
  1  | import { type Locator, type Page } from '@playwright/test';
  2  | 
  3  | export class HomePage {
  4  |   private readonly page: Page;
  5  | 
  6  |   // Locators
  7  |   private readonly myAccountMenu: Locator;
  8  |   private readonly loginLink: Locator;
  9  |   private readonly registerLink: Locator;
  10 |   private readonly searchInput: Locator;
  11 |   private readonly searchButton: Locator;
  12 | 
  13 |   constructor(page: Page) {
  14 |     this.page = page;
  15 |     // Initialize locators with CSS selectors
  16 |     this.myAccountMenu = page.getByRole('link', { name: /my account/i }).first();
  17 |     this.loginLink = page.getByRole('link', { name: /^login$/i }).first();
  18 |     this.registerLink = page.getByRole('link', { name: /^register$/i }).first();
  19 |     this.searchInput = page.locator('input[name="search"]').first();
  20 |     this.searchButton = page.locator('button.btn.btn-default.btn-lg').first();
  21 |   }
  22 | 
  23 |   /**
  24 |    * Opens the application under test.
  25 |    */
  26 |   async goto(): Promise<void> {
> 27 |     await this.page.goto(process.env.WEB_APP_URL || 'http://localhost/opencart/upload/');
     |                     ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost/opencart/upload/
  28 |   }
  29 | 
  30 |   /**
  31 |    * Opens the account menu.
  32 |    */
  33 |   async clickMyAccount(): Promise<void> {
  34 |     await this.myAccountMenu.click();
  35 |   }
  36 | 
  37 |   /**
  38 |    * Navigates to the login page.
  39 |    */
  40 |   async clickLogin(): Promise<void> {
  41 |     await this.loginLink.click();
  42 |   }
  43 | 
  44 |   /**
  45 |    * Navigates to the registration page.
  46 |    */
  47 |   async clickRegister(): Promise<void> {
  48 |     await this.registerLink.click();
  49 |   }
  50 | 
  51 |   /**
  52 |    * Searches for a product using the main site search field.
  53 |    * @param productName Product name to look up.
  54 |    */
  55 |   async searchForProduct(productName: string): Promise<void> {
  56 |     await this.searchInput.fill(productName);
  57 |     await this.searchButton.click();
  58 |   }
  59 | }
  60 | 
```