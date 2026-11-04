import { type Locator, type Page } from '@playwright/test';

export class MyAccountPage {
  private readonly page: Page;

  // Locators
  private readonly accountHeading: Locator;
  private readonly accountLogoutLink: Locator;
  private readonly continueLink: Locator;
  private readonly logoutHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    // Initialize locators with CSS selectors
    this.accountHeading = page.locator('#content').getByRole('heading', { name: /^my account$/i });
    this.accountLogoutLink = page.getByRole('link', { name: /^logout$/i }).first();
    this.continueLink = page.getByRole('link', { name: /^continue$/i }).first();
    this.logoutHeading = page.getByRole('heading', { name: /account logout/i });
  }

  /**
   * Verifies that the authenticated account area is displayed.
   */
  async isMyAccountPageVisible(): Promise<boolean> {
    return await this.accountHeading.isVisible();
  }

  /**
   * Checks whether an authenticated logout option is available.
   */
  async isLogoutLinkVisible(): Promise<boolean> {
    return await this.accountLogoutLink.isVisible();
  }

  /**
   * Checks whether the logout confirmation page is displayed.
   */
  async isLogoutConfirmationVisible(): Promise<boolean> {
    await this.logoutHeading.waitFor({ state: 'visible' });
    return await this.logoutHeading.isVisible();
  }

  /**
   * Logs the current user out.
   */
  async logout(): Promise<void> {
    await this.accountLogoutLink.click();
  }

  /**
   * Clicks the post-logout continue link.
   */
  async continueAfterLogout(): Promise<void> {
    await this.continueLink.click();
  }
}
