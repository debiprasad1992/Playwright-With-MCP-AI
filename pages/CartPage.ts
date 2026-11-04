import { type Locator, type Page } from '@playwright/test';

export class CartPage {
  private readonly page: Page;

  // Locators
  private readonly cartButton: Locator;
  private readonly cartRow: (productName: string) => Locator;
  private readonly totalText: Locator;

  constructor(page: Page) {
    this.page = page;
    // Initialize locators with CSS selectors
    this.cartButton = page.getByRole('link', { name: /shopping cart/i }).first();
    this.cartRow = (productName: string) =>
      page.locator('table.table tbody tr').filter({ has: page.getByRole('link', { name: new RegExp(productName, 'i') }) }).first();
    this.totalText = page.locator('tr:has-text("Total")').last();
  }

  /**
   * Opens the shopping cart.
   */
  async openCart(): Promise<void> {
    await this.cartButton.click();
  }

  /**
   * Verifies that the expected product is present in the cart.
   * @param productName Product name to validate.
   */
  async isProductVisible(productName: string): Promise<boolean> {
    return await this.cartRow(productName).isVisible();
  }

  /**
   * Reads the quantity for the specified product row.
   * @param productName Product name to inspect.
   */
  async getQuantity(productName: string): Promise<number> {
    const quantityInput = this.cartRow(productName).locator('input[name*="quantity"]').first();
    const value = await quantityInput.inputValue();
    return Number(value);
  }

  /**
   * Reads the displayed price for the product row.
   * @param productName Product name to inspect.
   */
  async getUnitPrice(productName: string): Promise<number> {
    const priceText = (await this.cartRow(productName).locator('td').nth(4).textContent()) || '$0.00';
    return Number(priceText.replace(/[$,]/g, ''));
  }

  /**
   * Reads the cart total currently displayed.
   */
  async getCartTotal(): Promise<number> {
    const totalText = (await this.totalText.textContent()) || '$0.00';
    return Number(totalText.replace(/[^0-9.]/g, ''));
  }
}
