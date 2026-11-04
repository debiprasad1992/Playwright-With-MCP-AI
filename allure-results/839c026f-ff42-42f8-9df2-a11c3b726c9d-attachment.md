# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web\opencart-customer-journey.spec.ts >> OpenCart customer shopping journey test @master @web
- Location: tests\web\opencart-customer-journey.spec.ts:8:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: /^continue$/i }).first()

```

# Page snapshot

```yaml
- generic [active] [ref=f3e1]:
  - navigation [ref=f3e2]:
    - generic [ref=f3e3]:
      - button "$ Currency " [ref=f3e7] [cursor=pointer]:
        - strong [ref=f3e8]: $
        - text: Currency
        - generic [ref=f3e9]: 
      - list [ref=f3e11]:
        - listitem [ref=f3e12]:
          - link "" [ref=f3e13] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=information/contact
          - text: "123456789"
        - listitem [ref=f3e15]:
          - link " My Account" [ref=f3e16] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/account
            - generic [ref=f3e17]: 
            - text: My Account
        - listitem [ref=f3e19]:
          - link " Wish List (0)" [ref=f3e20] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/wishlist
            - generic [ref=f3e21]: 
            - text: Wish List (0)
        - listitem [ref=f3e22]:
          - link " Shopping Cart" [ref=f3e23] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=checkout/cart
            - generic [ref=f3e24]: 
            - text: Shopping Cart
        - listitem [ref=f3e25]:
          - link " Checkout" [ref=f3e26] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=checkout/checkout
            - generic [ref=f3e27]: 
            - text: Checkout
  - banner [ref=f3e28]:
    - generic [ref=f3e30]:
      - link [ref=f3e33] [cursor=pointer]:
        - /url: https://awesomeqa.com/ui/index.php?route=common/home
        - img "TheTestingAcademy eCommerce" [ref=f3e34]
      - generic [ref=f3e36]:
        - textbox "Search" [ref=f3e37]
        - button "" [ref=f3e39] [cursor=pointer]
      - button " 0 item(s) - $0.00" [ref=f3e43] [cursor=pointer]:
        - generic [ref=f3e44]: 
        - text: 0 item(s) - $0.00
  - navigation [ref=f3e46]:
    - generic: 
    - list [ref=f3e48]:
      - listitem [ref=f3e49]:
        - link "Desktops" [ref=f3e50] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=20
      - listitem [ref=f3e51]:
        - link "Laptops & Notebooks" [ref=f3e52] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=18
      - listitem [ref=f3e53]:
        - link "Components" [ref=f3e54] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=25
      - listitem [ref=f3e55]:
        - link "Tablets" [ref=f3e56] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=57
      - listitem [ref=f3e57]:
        - link "Software" [ref=f3e58] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=17
      - listitem [ref=f3e59]:
        - link "Phones & PDAs" [ref=f3e60] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=24
      - listitem [ref=f3e61]:
        - link "Cameras" [ref=f3e62] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=33
      - listitem [ref=f3e63]:
        - link "MP3 Players" [ref=f3e64] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=34
  - generic [ref=f3e65]:
    - list [ref=f3e66]:
      - listitem [ref=f3e67]:
        - link "" [ref=f3e68] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=common/home
      - listitem [ref=f3e70]:
        - link "Account" [ref=f3e71] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=account/account
      - listitem [ref=f3e72]:
        - link "Logout" [ref=f3e73] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=account/logout
    - generic [ref=f3e74]:
      - generic [ref=f3e75]:
        - heading "Account Logout" [level=1] [ref=f3e76]
        - paragraph [ref=f3e77]: You have been logged off your account. It is now safe to leave the computer.
        - paragraph [ref=f3e78]: Your shopping cart has been saved, the items inside it will be restored whenever you log back into your account.
        - link "Continue" [ref=f3e80] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=common/home
      - complementary [ref=f3e81]:
        - generic [ref=f3e82]:
          - link "Login" [ref=f3e83] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/login
          - link "Register" [ref=f3e84] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/register
          - link "Forgotten Password" [ref=f3e85] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/forgotten
          - link "My Account" [ref=f3e86] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/account
          - link "Address Book" [ref=f3e87] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/address
          - link "Wish List" [ref=f3e88] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/wishlist
          - link "Order History" [ref=f3e89] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/order
          - link "Downloads" [ref=f3e90] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/download
          - link "Recurring payments" [ref=f3e91] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/recurring
          - link "Reward Points" [ref=f3e92] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/reward
          - link "Returns" [ref=f3e93] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/return
          - link "Transactions" [ref=f3e94] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/transaction
          - link "Newsletter" [ref=f3e95] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/newsletter
  - contentinfo [ref=f3e96]:
    - generic [ref=f3e97]:
      - generic [ref=f3e98]:
        - generic [ref=f3e99]:
          - heading "Information" [level=5] [ref=f3e100]
          - list [ref=f3e101]:
            - listitem [ref=f3e102]:
              - link "About Us" [ref=f3e103] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=4
            - listitem [ref=f3e104]:
              - link "Delivery Information" [ref=f3e105] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=6
            - listitem [ref=f3e106]:
              - link "Privacy Policy" [ref=f3e107] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=3
            - listitem [ref=f3e108]:
              - link "Terms & Conditions" [ref=f3e109] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=5
        - generic [ref=f3e110]:
          - heading "Customer Service" [level=5] [ref=f3e111]
          - list [ref=f3e112]:
            - listitem [ref=f3e113]:
              - link "Contact Us" [ref=f3e114] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/contact
            - listitem [ref=f3e115]:
              - link "Returns" [ref=f3e116] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/return/add
            - listitem [ref=f3e117]:
              - link "Site Map" [ref=f3e118] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/sitemap
        - generic [ref=f3e119]:
          - heading "Extras" [level=5] [ref=f3e120]
          - list [ref=f3e121]:
            - listitem [ref=f3e122]:
              - link "Brands" [ref=f3e123] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=product/manufacturer
            - listitem [ref=f3e124]:
              - link "Gift Certificates" [ref=f3e125] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/voucher
            - listitem [ref=f3e126]:
              - link "Affiliate" [ref=f3e127] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=affiliate/login
            - listitem [ref=f3e128]:
              - link "Specials" [ref=f3e129] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=product/special
        - generic [ref=f3e130]:
          - heading "My Account" [level=5] [ref=f3e131]
          - list [ref=f3e132]:
            - listitem [ref=f3e133]:
              - link "My Account" [ref=f3e134] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/account
            - listitem [ref=f3e135]:
              - link "Order History" [ref=f3e136] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/order
            - listitem [ref=f3e137]:
              - link "Wish List" [ref=f3e138] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/wishlist
            - listitem [ref=f3e139]:
              - link "Newsletter" [ref=f3e140] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/newsletter
      - separator [ref=f3e141]
      - paragraph [ref=f3e142]:
        - text: Powered By
        - link "OpenCart" [ref=f3e143] [cursor=pointer]:
          - /url: http://www.opencart.com
        - text: TheTestingAcademy eCommerce © 2026
```

# Test source

```ts
  1  | import { type Locator, type Page } from '@playwright/test';
  2  | 
  3  | export class MyAccountPage {
  4  |   private readonly page: Page;
  5  | 
  6  |   // Locators
  7  |   private readonly accountHeading: Locator;
  8  |   private readonly accountLogoutLink: Locator;
  9  |   private readonly continueButton: Locator;
  10 | 
  11 |   constructor(page: Page) {
  12 |     this.page = page;
  13 |     // Initialize locators with CSS selectors
  14 |     this.accountHeading = page.getByRole('heading', { name: /my account/i });
  15 |     this.accountLogoutLink = page.getByRole('link', { name: /^logout$/i }).first();
  16 |     this.continueButton = page.getByRole('button', { name: /^continue$/i }).first();
  17 |   }
  18 | 
  19 |   /**
  20 |    * Verifies that the authenticated account area is displayed.
  21 |    */
  22 |   async isMyAccountPageVisible(): Promise<boolean> {
  23 |     return await this.accountHeading.isVisible();
  24 |   }
  25 | 
  26 |   /**
  27 |    * Logs the current user out.
  28 |    */
  29 |   async logout(): Promise<void> {
  30 |     await this.accountLogoutLink.click();
  31 |   }
  32 | 
  33 |   /**
  34 |    * Clicks the post-logout continue button.
  35 |    */
  36 |   async continueAfterLogout(): Promise<void> {
> 37 |     await this.continueButton.click();
     |                               ^ Error: locator.click: Test timeout of 30000ms exceeded.
  38 |   }
  39 | }
  40 | 
```