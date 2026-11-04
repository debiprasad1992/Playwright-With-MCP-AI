import { type Locator, type Page } from '@playwright/test';

export class ProductPage {
  private readonly page: Page;

  // Locators
  private readonly productName: Locator;
  private readonly quantityInput: Locator;
  private readonly addToCartButton: Locator;
  private readonly successText: Locator;

  constructor(page: Page) {
    this.page = page;
    // Initialize locators with CSS selectors
    this.productName = page.locator('#content h1');
    this.quantityInput = page.locator('input[name="quantity"]');
    this.addToCartButton = page.locator('#button-cart');
    this.successText = page.getByText(/success/i);
  }

  /**
   * Verifies that the product details page is displayed.
   */
  async isProductDetailsVisible(): Promise<boolean> {
    await this.productName.waitFor({ state: 'visible' });
    return await this.productName.isVisible();
  }

  /**
   * Adds the product to the cart with the supplied quantity.
   * @param quantity Quantity to add.
   */
  async addToCart(quantity: number = 1): Promise<void> {
    if (await this.quantityInput.count()) {
      await this.quantityInput.fill(String(quantity));
    }
    await this.addToCartButton.click();
  }

  /**
   * Reads the product name visible on the details page.
   */
  async getProductName(): Promise<string> {
    return (await this.productName.textContent())?.trim() || '';
  }

  /**
   * Reads the success confirmation text after adding to cart.
   */
  async getSuccessText(): Promise<string> {
    return (await this.successText.textContent())?.trim() || '';
  }
}
