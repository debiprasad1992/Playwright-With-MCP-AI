import { type Locator, type Page } from '@playwright/test';

export class SearchResultsPage {
  private readonly page: Page;

  // Locators
  private readonly productLink: (productName: string) => Locator;

  constructor(page: Page) {
    this.page = page;
    this.productLink = (productName: string) =>
      this.page.locator('div.product-layout a').filter({ hasText: productName }).first();
  }

  /**
   * Verifies that a product appears in the search results.
   * @param productName Product name to look up.
   */
  async isProductVisible(productName: string): Promise<boolean> {
    return await this.productLink(productName).isVisible();
  }

  /**
   * Opens a product from the search results.
   * @param productName Product name to click.
   */
  async openProduct(productName: string): Promise<void> {
    await this.productLink(productName).click();
  }
}
