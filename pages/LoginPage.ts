import { type Locator, type Page } from '@playwright/test';

export class LoginPage {
  private readonly page: Page;

  // Locators
  private readonly emailInput: Locator;
  private readonly passwordInput: Locator;
  private readonly submitButton: Locator;
  private readonly warningText: Locator;
  private readonly loginErrorAlert: Locator;

  constructor(page: Page) {
    this.page = page;
    // Initialize locators with CSS selectors
    this.emailInput = page.locator('input[name="email"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.submitButton = page.getByRole('button', { name: /^login$/i });
    this.warningText = page.getByText('Warning: No match for E-Mail Address and/or Password.');
    this.loginErrorAlert = page.locator('.alert.alert-danger');
  }

  /**
   * Verifies the login page is visible.
   */
  async isLoginPageVisible(): Promise<boolean> {
    const heading = this.page.getByRole('heading', { name: /returning customer/i });
    await heading.waitFor({ state: 'visible' });
    return await heading.isVisible();
  }

  /**
   * Logs in with the supplied credentials.
   * @param email Customer email.
   * @param password Customer password.
   */
  async login(email: string, password: string): Promise<void> {
    await this.emailInput.fill(email.trim());
    await this.passwordInput.fill(password.trim());
    await this.submitButton.click();
  }

  /**
   * Checks whether the invalid-login warning is displayed.
   */
  async isWarningVisible(): Promise<boolean> {
    return await this.warningText.isVisible();
  }

  /**
   * Checks whether OpenCart displayed a server-side login error.
   */
  async isLoginErrorAlertVisible(): Promise<boolean> {
    return await this.loginErrorAlert.isVisible();
  }

  /**
   * Checks whether either login input is blocked by native browser validation.
   */
  async hasNativeValidationError(): Promise<boolean> {
    const emailInvalid = await this.emailInput.evaluate(
      (element) => !(element as HTMLInputElement).validity.valid,
    );
    const passwordInvalid = await this.passwordInput.evaluate(
      (element) => !(element as HTMLInputElement).validity.valid,
    );
    return emailInvalid || passwordInvalid;
  }
}
