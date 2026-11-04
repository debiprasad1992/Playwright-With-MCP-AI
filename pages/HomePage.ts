import { type Locator, type Page } from '@playwright/test';

export class HomePage {
  private readonly page: Page;

  // Locators
  private readonly myAccountMenu: Locator;
  private readonly loginLink: Locator;
  private readonly registerLink: Locator;
  private readonly searchInput: Locator;
  private readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    // Initialize locators with CSS selectors
    this.myAccountMenu = page.getByRole('link', { name: /my account/i }).first();
    this.loginLink = page.getByRole('link', { name: /^login$/i }).first();
    this.registerLink = page.getByRole('link', { name: /^register$/i }).first();
    this.searchInput = page.locator('input[name="search"]').first();
    this.searchButton = page.locator('button.btn.btn-default.btn-lg').first();
  }

  /**
   * Opens the application under test.
   */
  async goto(): Promise<void> {
    await this.page.goto(process.env.WEB_APP_URL || 'http://localhost/opencart/upload/');
  }

  /**
   * Opens the account menu.
   */
  async clickMyAccount(): Promise<void> {
    await this.myAccountMenu.click();
  }

  /**
   * Navigates to the login page.
   */
  async clickLogin(): Promise<void> {
    await this.loginLink.click();
  }

  /**
   * Navigates to the registration page.
   */
  async clickRegister(): Promise<void> {
    await this.registerLink.click();
  }

  /**
   * Searches for a product using the main site search field.
   * @param productName Product name to look up.
   */
  async searchForProduct(productName: string): Promise<void> {
    await this.searchInput.fill(productName);
    await this.searchButton.click();
  }
}
