import { type Locator, type Page } from '@playwright/test';

export interface ICustomerRegistrationData {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  password: string;
  confirmPassword: string;
}

export class RegisterPage {
  private readonly page: Page;

  // Locators
  private readonly firstNameInput: Locator;
  private readonly lastNameInput: Locator;
  private readonly emailInput: Locator;
  private readonly telephoneInput: Locator;
  private readonly passwordInput: Locator;
  private readonly confirmPasswordInput: Locator;
  private readonly privacyPolicyCheckbox: Locator;
  private readonly submitButton: Locator;
  private readonly successHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    // Initialize locators with CSS selectors
    this.firstNameInput = page.locator('input[name="firstname"]');
    this.lastNameInput = page.locator('input[name="lastname"]');
    this.emailInput = page.locator('input[name="email"]');
    this.telephoneInput = page.locator('input[name="telephone"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.confirmPasswordInput = page.locator('input[name="confirm"]');
    this.privacyPolicyCheckbox = page.locator('input[name="agree"]');
    this.submitButton = page.getByRole('button', { name: /^continue$/i });
    this.successHeading = page.getByText('Your Account Has Been Created!');
  }

  /**
   * Verifies that the registration page is visible.
   */
  async isRegisterPageVisible(): Promise<boolean> {
    const heading = this.page.getByRole('heading', { name: /register account/i });
    await heading.waitFor({ state: 'visible' });
    return await heading.isVisible();
  }

  /**
   * Completes the registration form and submits it.
   * @param customer Customer registration data.
   */
  async completeRegistration(customer: ICustomerRegistrationData): Promise<void> {
    await this.firstNameInput.fill(customer.firstName);
    await this.lastNameInput.fill(customer.lastName);
    await this.emailInput.fill(customer.email);
    await this.telephoneInput.fill(customer.telephone);
    await this.passwordInput.fill(customer.password);
    await this.confirmPasswordInput.fill(customer.confirmPassword);
    await this.privacyPolicyCheckbox.check();
    await this.submitButton.click();
  }

  /**
   * Checks whether the account-creation confirmation is displayed.
   */
  async isRegistrationSuccessVisible(): Promise<boolean> {
    return await this.successHeading.isVisible();
  }
}
