# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web\opencart-customer-journey.spec.ts >> OpenCart customer shopping journey test @master @web
- Location: tests\web\opencart-customer-journey.spec.ts:8:5

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('button', { name: /add to cart/i }) resolved to 3 elements:
    1) <button type="button" onclick="cart.add('43', '1');">…</button> aka getByRole('button', { name: ' Add to Cart' }).first()
    2) <button type="button" onclick="cart.add('44', '1');">…</button> aka getByRole('button', { name: ' Add to Cart' }).nth(1)
    3) <button type="button" onclick="cart.add('45', '1');">…</button> aka getByRole('button', { name: ' Add to Cart' }).nth(2)

Call log:
  - waiting for getByRole('button', { name: /add to cart/i })

```

# Page snapshot

```yaml
- generic [active] [ref=f7e1]:
  - navigation [ref=f7e2]:
    - generic [ref=f7e3]:
      - button "$ Currency " [ref=f7e7] [cursor=pointer]:
        - strong [ref=f7e8]: $
        - text: Currency
        - generic [ref=f7e9]: 
      - list [ref=f7e11]:
        - listitem [ref=f7e12]:
          - link "" [ref=f7e13] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=information/contact
          - text: "123456789"
        - listitem [ref=f7e15]:
          - link " My Account" [ref=f7e16] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/account
            - generic [ref=f7e17]: 
            - text: My Account
        - listitem [ref=f7e19]:
          - link " Wish List (0)" [ref=f7e20] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/wishlist
            - generic [ref=f7e21]: 
            - text: Wish List (0)
        - listitem [ref=f7e22]:
          - link " Shopping Cart" [ref=f7e23] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=checkout/cart
            - generic [ref=f7e24]: 
            - text: Shopping Cart
        - listitem [ref=f7e25]:
          - link " Checkout" [ref=f7e26] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=checkout/checkout
            - generic [ref=f7e27]: 
            - text: Checkout
  - banner [ref=f7e28]:
    - generic [ref=f7e30]:
      - link [ref=f7e33] [cursor=pointer]:
        - /url: https://awesomeqa.com/ui/index.php?route=common/home
        - img "TheTestingAcademy eCommerce" [ref=f7e34]
      - generic [ref=f7e36]:
        - textbox "Search" [ref=f7e37]: MacBook
        - button "" [ref=f7e39] [cursor=pointer]
      - button " 0 item(s) - $0.00" [ref=f7e43] [cursor=pointer]:
        - generic [ref=f7e44]: 
        - text: 0 item(s) - $0.00
  - navigation [ref=f7e46]:
    - generic: 
    - list [ref=f7e48]:
      - listitem [ref=f7e49]:
        - link "Desktops" [ref=f7e50] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=20
      - listitem [ref=f7e51]:
        - link "Laptops & Notebooks" [ref=f7e52] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=18
      - listitem [ref=f7e53]:
        - link "Components" [ref=f7e54] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=25
      - listitem [ref=f7e55]:
        - link "Tablets" [ref=f7e56] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=57
      - listitem [ref=f7e57]:
        - link "Software" [ref=f7e58] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=17
      - listitem [ref=f7e59]:
        - link "Phones & PDAs" [ref=f7e60] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=24
      - listitem [ref=f7e61]:
        - link "Cameras" [ref=f7e62] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=33
      - listitem [ref=f7e63]:
        - link "MP3 Players" [ref=f7e64] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=34
  - generic [ref=f7e65]:
    - list [ref=f7e66]:
      - listitem [ref=f7e67]:
        - link "" [ref=f7e68] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=common/home
      - listitem [ref=f7e70]:
        - link "Search" [ref=f7e71] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/search&search=MacBook
    - generic [ref=f7e73]:
      - heading "Search - MacBook" [level=1] [ref=f7e74]
      - generic [ref=f7e75]: Search Criteria
      - generic [ref=f7e76]:
        - textbox "Search Criteria" [ref=f7e78]:
          - /placeholder: Keywords
          - text: MacBook
        - combobox [ref=f7e80]:
          - option "All Categories" [selected]
          - option "Desktops"
          - option "PC"
          - option "Mac"
          - option "Laptops & Notebooks"
          - option "Macs"
          - option "Windows"
          - option "Components"
          - option "Mice and Trackballs"
          - option "Monitors"
          - option "test 1"
          - option "test 2"
          - option "Printers"
          - option "Scanners"
          - option "Web Cameras"
          - option "Tablets"
          - option "Software"
          - option "Phones & PDAs"
          - option "Cameras"
          - option "MP3 Players"
          - option "test 11"
          - option "test 12"
          - option "test 15"
          - option "test 16"
          - option "test 17"
          - option "test 18"
          - option "test 19"
          - option "test 20"
          - option "test 25"
          - option "test 21"
          - option "test 22"
          - option "test 23"
          - option "test 24"
          - option "test 4"
          - option "test 5"
          - option "test 6"
          - option "test 7"
          - option "test 8"
          - option "test 9"
        - generic [ref=f7e82] [cursor=pointer]:
          - checkbox "Search in subcategories" [disabled] [ref=f7e83]
          - text: Search in subcategories
      - paragraph [ref=f7e84]:
        - generic [ref=f7e85] [cursor=pointer]:
          - checkbox "Search in product descriptions" [ref=f7e86]
          - text: Search in product descriptions
      - button "Search" [ref=f7e87] [cursor=pointer]
      - heading "Products meeting the search criteria" [level=2] [ref=f7e88]
      - generic [ref=f7e89]:
        - generic [ref=f7e91]:
          - button "" [ref=f7e92] [cursor=pointer]
          - button "" [ref=f7e94] [cursor=pointer]
        - link "Product Compare (0)" [ref=f7e98] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/compare
        - generic [ref=f7e100]:
          - generic [ref=f7e101]: "Sort By:"
          - combobox "Sort By:" [ref=f7e102]:
            - option "Default" [selected]
            - option "Name (A - Z)"
            - option "Name (Z - A)"
            - option "Price (Low > High)"
            - option "Price (High > Low)"
            - option "Rating (Highest)"
            - option "Rating (Lowest)"
            - option "Model (A - Z)"
            - option "Model (Z - A)"
        - generic [ref=f7e104]:
          - generic [ref=f7e105]: "Show:"
          - combobox "Show:" [ref=f7e106]:
            - option "20" [selected]
            - option "25"
            - option "50"
            - option "75"
            - option "100"
      - generic [ref=f7e107]:
        - generic [ref=f7e109]:
          - link [ref=f7e111] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=43&search=MacBook
            - img "MacBook" [ref=f7e112]
          - generic [ref=f7e113]:
            - generic [ref=f7e114]:
              - heading [level=4] [ref=f7e115]:
                - link "MacBook" [ref=f7e116] [cursor=pointer]:
                  - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=43&search=MacBook
              - paragraph [ref=f7e117]: Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.16GHz, t..
              - paragraph [ref=f7e118]:
                - text: $602.00
                - generic [ref=f7e119]: "Ex Tax: $500.00"
            - generic [ref=f7e120]:
              - button " Add to Cart" [ref=f7e121] [cursor=pointer]:
                - generic [ref=f7e122]: 
                - text: Add to Cart
              - button "" [ref=f7e123] [cursor=pointer]
              - button "" [ref=f7e125] [cursor=pointer]
        - generic [ref=f7e128]:
          - link [ref=f7e130] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=44&search=MacBook
            - img "MacBook Air" [ref=f7e131]
          - generic [ref=f7e132]:
            - generic [ref=f7e133]:
              - heading [level=4] [ref=f7e134]:
                - link "MacBook Air" [ref=f7e135] [cursor=pointer]:
                  - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=44&search=MacBook
              - paragraph [ref=f7e136]: MacBook Air is ultrathin, ultraportable, and ultra unlike anything else. But you don’t lose in..
              - paragraph [ref=f7e137]:
                - text: $1,202.00
                - generic [ref=f7e138]: "Ex Tax: $1,000.00"
            - generic [ref=f7e139]:
              - button " Add to Cart" [ref=f7e140] [cursor=pointer]:
                - generic [ref=f7e141]: 
                - text: Add to Cart
              - button "" [ref=f7e142] [cursor=pointer]
              - button "" [ref=f7e144] [cursor=pointer]
        - generic [ref=f7e147]:
          - link [ref=f7e149] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=45&search=MacBook
            - img "MacBook Pro" [ref=f7e150]
          - generic [ref=f7e151]:
            - generic [ref=f7e152]:
              - heading [level=4] [ref=f7e153]:
                - link "MacBook Pro" [ref=f7e154] [cursor=pointer]:
                  - /url: https://awesomeqa.com/ui/index.php?route=product/product&product_id=45&search=MacBook
              - paragraph [ref=f7e155]: Latest Intel mobile architecture Powered by the most advanced mobile processors from Intel, ..
              - paragraph [ref=f7e156]:
                - text: $2,000.00
                - generic [ref=f7e157]: "Ex Tax: $2,000.00"
            - generic [ref=f7e158]:
              - button " Add to Cart" [ref=f7e159] [cursor=pointer]:
                - generic [ref=f7e160]: 
                - text: Add to Cart
              - button "" [ref=f7e161] [cursor=pointer]
              - button "" [ref=f7e163] [cursor=pointer]
      - generic [ref=f7e165]: Showing 1 to 3 of 3 (1 Pages)
  - contentinfo [ref=f7e168]:
    - generic [ref=f7e169]:
      - generic [ref=f7e170]:
        - generic [ref=f7e171]:
          - heading "Information" [level=5] [ref=f7e172]
          - list [ref=f7e173]:
            - listitem [ref=f7e174]:
              - link "About Us" [ref=f7e175] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=4
            - listitem [ref=f7e176]:
              - link "Delivery Information" [ref=f7e177] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=6
            - listitem [ref=f7e178]:
              - link "Privacy Policy" [ref=f7e179] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=3
            - listitem [ref=f7e180]:
              - link "Terms & Conditions" [ref=f7e181] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=5
        - generic [ref=f7e182]:
          - heading "Customer Service" [level=5] [ref=f7e183]
          - list [ref=f7e184]:
            - listitem [ref=f7e185]:
              - link "Contact Us" [ref=f7e186] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/contact
            - listitem [ref=f7e187]:
              - link "Returns" [ref=f7e188] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/return/add
            - listitem [ref=f7e189]:
              - link "Site Map" [ref=f7e190] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/sitemap
        - generic [ref=f7e191]:
          - heading "Extras" [level=5] [ref=f7e192]
          - list [ref=f7e193]:
            - listitem [ref=f7e194]:
              - link "Brands" [ref=f7e195] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=product/manufacturer
            - listitem [ref=f7e196]:
              - link "Gift Certificates" [ref=f7e197] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/voucher
            - listitem [ref=f7e198]:
              - link "Affiliate" [ref=f7e199] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=affiliate/login
            - listitem [ref=f7e200]:
              - link "Specials" [ref=f7e201] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=product/special
        - generic [ref=f7e202]:
          - heading "My Account" [level=5] [ref=f7e203]
          - list [ref=f7e204]:
            - listitem [ref=f7e205]:
              - link "My Account" [ref=f7e206] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/account
            - listitem [ref=f7e207]:
              - link "Order History" [ref=f7e208] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/order
            - listitem [ref=f7e209]:
              - link "Wish List" [ref=f7e210] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/wishlist
            - listitem [ref=f7e211]:
              - link "Newsletter" [ref=f7e212] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/newsletter
      - separator [ref=f7e213]
      - paragraph [ref=f7e214]:
        - text: Powered By
        - link "OpenCart" [ref=f7e215] [cursor=pointer]:
          - /url: http://www.opencart.com
        - text: TheTestingAcademy eCommerce © 2026
```

# Test source

```ts
  1  | import { type Locator, type Page } from '@playwright/test';
  2  | 
  3  | export class ProductPage {
  4  |   private readonly page: Page;
  5  | 
  6  |   // Locators
  7  |   private readonly productName: Locator;
  8  |   private readonly quantityInput: Locator;
  9  |   private readonly addToCartButton: Locator;
  10 |   private readonly successText: Locator;
  11 | 
  12 |   constructor(page: Page) {
  13 |     this.page = page;
  14 |     // Initialize locators with CSS selectors
  15 |     this.productName = page.locator('h1');
  16 |     this.quantityInput = page.locator('input[name="quantity"]');
  17 |     this.addToCartButton = page.getByRole('button', { name: /add to cart/i });
  18 |     this.successText = page.getByText(/success/i);
  19 |   }
  20 | 
  21 |   /**
  22 |    * Verifies that the product details page is displayed.
  23 |    */
  24 |   async isProductDetailsVisible(): Promise<boolean> {
  25 |     return await this.productName.isVisible();
  26 |   }
  27 | 
  28 |   /**
  29 |    * Adds the product to the cart with the supplied quantity.
  30 |    * @param quantity Quantity to add.
  31 |    */
  32 |   async addToCart(quantity: number = 1): Promise<void> {
  33 |     if (await this.quantityInput.count()) {
  34 |       await this.quantityInput.fill(String(quantity));
  35 |     }
> 36 |     await this.addToCartButton.click();
     |                                ^ Error: locator.click: Error: strict mode violation: getByRole('button', { name: /add to cart/i }) resolved to 3 elements:
  37 |   }
  38 | 
  39 |   /**
  40 |    * Reads the product name visible on the details page.
  41 |    */
  42 |   async getProductName(): Promise<string> {
  43 |     return (await this.productName.textContent())?.trim() || '';
  44 |   }
  45 | 
  46 |   /**
  47 |    * Reads the success confirmation text after adding to cart.
  48 |    */
  49 |   async getSuccessText(): Promise<string> {
  50 |     return (await this.successText.textContent())?.trim() || '';
  51 |   }
  52 | }
  53 | 
```