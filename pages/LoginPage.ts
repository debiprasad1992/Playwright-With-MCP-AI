import { type Locator, type Page } from '@playwright/test';

export class LoginPage {
  private readonly page: Page;

  // Locators
  private readonly emailInput: Locator;
  private readonly passwordInput: Locator;
  private readonly submitButton: Locator;
  private readonly warningText: Locator;

  constructor(page: Page) {
    this.page = page;
    // Initialize locators with CSS selectors
    this.emailInput = page.locator('input[name="email"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.submitButton = page.getByRole('button', { name: /^login$/i });
    this.warningText = page.getByText('Warning: No match for E-Mail Address and/or Password.');
  }

  /**
   * Verifies the login page is visible.
   */
  async isLoginPageVisible(): Promise<boolean> {
    return await this.page.getByRole('heading', { name: /returning customer/i }).isVisible();
  }

  /**
   * Logs in with the supplied credentials.
   * @param email Customer email.
   * @param password Customer password.
   */
  async login(email: string, password: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }

  /**
   * Checks whether the invalid-login warning is displayed.
   */
  async isWarningVisible(): Promise<boolean> {
    return await this.warningText.isVisible();
  }
}
