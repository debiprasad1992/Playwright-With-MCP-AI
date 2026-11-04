# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web\opencart-customer-journey.spec.ts >> OpenCart customer shopping journey test @master @web
- Location: tests\web\opencart-customer-journey.spec.ts:8:5

# Error details

```
Error: locator.isVisible: Error: strict mode violation: getByRole('heading', { name: /my account/i }) resolved to 2 elements:
    1) <h2>My Account</h2> aka locator('#content').getByRole('heading', { name: 'My Account' })
    2) <h5>My Account</h5> aka getByRole('contentinfo').getByRole('heading', { name: 'My Account' })

Call log:
    - checking visibility of getByRole('heading', { name: /my account/i })

```

# Page snapshot

```yaml
- generic [active] [ref=f6e1]:
  - navigation [ref=f6e2]:
    - generic [ref=f6e3]:
      - button "$ Currency " [ref=f6e7] [cursor=pointer]:
        - strong [ref=f6e8]: $
        - text: Currency
        - generic [ref=f6e9]: 
      - list [ref=f6e11]:
        - listitem [ref=f6e12]:
          - link "" [ref=f6e13] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=information/contact
          - text: "123456789"
        - listitem [ref=f6e15]:
          - link " My Account" [ref=f6e16] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/account
            - generic [ref=f6e17]: 
            - text: My Account
        - listitem [ref=f6e19]:
          - link " Wish List (0)" [ref=f6e20] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/wishlist
            - generic [ref=f6e21]: 
            - text: Wish List (0)
        - listitem [ref=f6e22]:
          - link " Shopping Cart" [ref=f6e23] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=checkout/cart
            - generic [ref=f6e24]: 
            - text: Shopping Cart
        - listitem [ref=f6e25]:
          - link " Checkout" [ref=f6e26] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=checkout/checkout
            - generic [ref=f6e27]: 
            - text: Checkout
  - banner [ref=f6e28]:
    - generic [ref=f6e30]:
      - link [ref=f6e33] [cursor=pointer]:
        - /url: https://awesomeqa.com/ui/index.php?route=common/home
        - img "TheTestingAcademy eCommerce" [ref=f6e34]
      - generic [ref=f6e36]:
        - textbox "Search" [ref=f6e37]
        - button "" [ref=f6e39] [cursor=pointer]
      - button " 0 item(s) - $0.00" [ref=f6e43] [cursor=pointer]:
        - generic [ref=f6e44]: 
        - text: 0 item(s) - $0.00
  - navigation [ref=f6e46]:
    - generic: 
    - list [ref=f6e48]:
      - listitem [ref=f6e49]:
        - link "Desktops" [ref=f6e50] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=20
      - listitem [ref=f6e51]:
        - link "Laptops & Notebooks" [ref=f6e52] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=18
      - listitem [ref=f6e53]:
        - link "Components" [ref=f6e54] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=25
      - listitem [ref=f6e55]:
        - link "Tablets" [ref=f6e56] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=57
      - listitem [ref=f6e57]:
        - link "Software" [ref=f6e58] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=17
      - listitem [ref=f6e59]:
        - link "Phones & PDAs" [ref=f6e60] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=24
      - listitem [ref=f6e61]:
        - link "Cameras" [ref=f6e62] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=33
      - listitem [ref=f6e63]:
        - link "MP3 Players" [ref=f6e64] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=product/category&path=34
  - generic [ref=f6e65]:
    - list [ref=f6e66]:
      - listitem [ref=f6e67]:
        - link "" [ref=f6e68] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=common/home
      - listitem [ref=f6e70]:
        - link "Account" [ref=f6e71] [cursor=pointer]:
          - /url: https://awesomeqa.com/ui/index.php?route=account/account
    - generic [ref=f6e72]:
      - generic [ref=f6e73]:
        - heading "My Account" [level=2] [ref=f6e74]
        - list [ref=f6e75]:
          - listitem [ref=f6e76]:
            - link "Edit your account information" [ref=f6e77] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=account/edit
          - listitem [ref=f6e78]:
            - link "Change your password" [ref=f6e79] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=account/password
          - listitem [ref=f6e80]:
            - link "Modify your address book entries" [ref=f6e81] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=account/address
          - listitem [ref=f6e82]:
            - link "Modify your wish list" [ref=f6e83] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=account/wishlist
        - heading "My Orders" [level=2] [ref=f6e84]
        - list [ref=f6e85]:
          - listitem [ref=f6e86]:
            - link "View your order history" [ref=f6e87] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=account/order
          - listitem [ref=f6e88]:
            - link "Downloads" [ref=f6e89] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=account/download
          - listitem [ref=f6e90]:
            - link "Your Reward Points" [ref=f6e91] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=account/reward
          - listitem [ref=f6e92]:
            - link "View your return requests" [ref=f6e93] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=account/return
          - listitem [ref=f6e94]:
            - link "Your Transactions" [ref=f6e95] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=account/transaction
          - listitem [ref=f6e96]:
            - link "Recurring payments" [ref=f6e97] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=account/recurring
        - heading "My Affiliate Account" [level=2] [ref=f6e98]
        - list [ref=f6e99]:
          - listitem [ref=f6e100]:
            - link "Register for an affiliate account" [ref=f6e101] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=account/affiliate/add
        - heading "Newsletter" [level=2] [ref=f6e102]
        - list [ref=f6e103]:
          - listitem [ref=f6e104]:
            - link "Subscribe / unsubscribe to newsletter" [ref=f6e105] [cursor=pointer]:
              - /url: https://awesomeqa.com/ui/index.php?route=account/newsletter
      - complementary [ref=f6e106]:
        - generic [ref=f6e107]:
          - link "My Account" [ref=f6e108] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/account
          - link "Edit Account" [ref=f6e109] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/edit
          - link "Password" [ref=f6e110] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/password
          - link "Address Book" [ref=f6e111] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/address
          - link "Wish List" [ref=f6e112] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/wishlist
          - link "Order History" [ref=f6e113] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/order
          - link "Downloads" [ref=f6e114] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/download
          - link "Recurring payments" [ref=f6e115] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/recurring
          - link "Reward Points" [ref=f6e116] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/reward
          - link "Returns" [ref=f6e117] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/return
          - link "Transactions" [ref=f6e118] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/transaction
          - link "Newsletter" [ref=f6e119] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/newsletter
          - link "Logout" [ref=f6e120] [cursor=pointer]:
            - /url: https://awesomeqa.com/ui/index.php?route=account/logout
  - contentinfo [ref=f6e121]:
    - generic [ref=f6e122]:
      - generic [ref=f6e123]:
        - generic [ref=f6e124]:
          - heading "Information" [level=5] [ref=f6e125]
          - list [ref=f6e126]:
            - listitem [ref=f6e127]:
              - link "About Us" [ref=f6e128] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=4
            - listitem [ref=f6e129]:
              - link "Delivery Information" [ref=f6e130] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=6
            - listitem [ref=f6e131]:
              - link "Privacy Policy" [ref=f6e132] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=3
            - listitem [ref=f6e133]:
              - link "Terms & Conditions" [ref=f6e134] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/information&information_id=5
        - generic [ref=f6e135]:
          - heading "Customer Service" [level=5] [ref=f6e136]
          - list [ref=f6e137]:
            - listitem [ref=f6e138]:
              - link "Contact Us" [ref=f6e139] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/contact
            - listitem [ref=f6e140]:
              - link "Returns" [ref=f6e141] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/return/add
            - listitem [ref=f6e142]:
              - link "Site Map" [ref=f6e143] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=information/sitemap
        - generic [ref=f6e144]:
          - heading "Extras" [level=5] [ref=f6e145]
          - list [ref=f6e146]:
            - listitem [ref=f6e147]:
              - link "Brands" [ref=f6e148] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=product/manufacturer
            - listitem [ref=f6e149]:
              - link "Gift Certificates" [ref=f6e150] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/voucher
            - listitem [ref=f6e151]:
              - link "Affiliate" [ref=f6e152] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=affiliate/login
            - listitem [ref=f6e153]:
              - link "Specials" [ref=f6e154] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=product/special
        - generic [ref=f6e155]:
          - heading "My Account" [level=5] [ref=f6e156]
          - list [ref=f6e157]:
            - listitem [ref=f6e158]:
              - link "My Account" [ref=f6e159] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/account
            - listitem [ref=f6e160]:
              - link "Order History" [ref=f6e161] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/order
            - listitem [ref=f6e162]:
              - link "Wish List" [ref=f6e163] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/wishlist
            - listitem [ref=f6e164]:
              - link "Newsletter" [ref=f6e165] [cursor=pointer]:
                - /url: https://awesomeqa.com/ui/index.php?route=account/newsletter
      - separator [ref=f6e166]
      - paragraph [ref=f6e167]:
        - text: Powered By
        - link "OpenCart" [ref=f6e168] [cursor=pointer]:
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
  9  |   private readonly continueLink: Locator;
  10 | 
  11 |   constructor(page: Page) {
  12 |     this.page = page;
  13 |     // Initialize locators with CSS selectors
  14 |     this.accountHeading = page.getByRole('heading', { name: /my account/i });
  15 |     this.accountLogoutLink = page.getByRole('link', { name: /^logout$/i }).first();
  16 |     this.continueLink = page.getByRole('link', { name: /^continue$/i }).first();
  17 |   }
  18 | 
  19 |   /**
  20 |    * Verifies that the authenticated account area is displayed.
  21 |    */
  22 |   async isMyAccountPageVisible(): Promise<boolean> {
> 23 |     return await this.accountHeading.isVisible();
     |                                      ^ Error: locator.isVisible: Error: strict mode violation: getByRole('heading', { name: /my account/i }) resolved to 2 elements:
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
  34 |    * Clicks the post-logout continue link.
  35 |    */
  36 |   async continueAfterLogout(): Promise<void> {
  37 |     await this.continueLink.click();
  38 |   }
  39 | }
  40 | 
```