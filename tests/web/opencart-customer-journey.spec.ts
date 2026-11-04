import { test, expect } from '../../fixtures/pageFixtures';
import { RandomDataUtil } from '../../utils/dataGenerator';
import { Helper } from '../../utils/helper';
import dotenv from 'dotenv';

dotenv.config();

test('OpenCart customer shopping journey test @master @web', async ({
  homePage,
  registerPage,
  loginPage,
  myAccountPage,
  searchResultsPage,
  productPage,
  cartPage,
}) => {
  const knownProduct = Helper.getProductDetails();
  const customer = {
    firstName: RandomDataUtil.getFirstName(),
    lastName: RandomDataUtil.getLastName(),
    email: `${RandomDataUtil.getFirstName().toLowerCase()}.${RandomDataUtil.getLastName().toLowerCase()}${Date.now()}@example.com`,
    telephone: RandomDataUtil.getPhoneNumber(),
    password: 'Test@1234',
    confirmPassword: 'Test@1234',
  };

  await test.step('1) Open the application', async () => {
    await homePage.goto();
  });

  await test.step('2) Register a new customer using unique data', async () => {
    await homePage.clickMyAccount();
    await homePage.clickRegister();

    const pageVisible = await registerPage.isRegisterPageVisible();
    expect(pageVisible).toBeTruthy();

    await registerPage.completeRegistration(customer);

    const registered = await registerPage.isRegistrationSuccessVisible();
    expect(registered).toBeTruthy();
  });

  await test.step('3) Log out from the new account', async () => {
    await myAccountPage.logout();
    await myAccountPage.continueAfterLogout();
  });

  await test.step('4) Log in again using the created credentials', async () => {
    await homePage.clickMyAccount();
    await homePage.clickLogin();

    const loginPageVisible = await loginPage.isLoginPageVisible();
    expect(loginPageVisible).toBeTruthy();

    await loginPage.login(customer.email, customer.password);

    const loggedIn = await myAccountPage.isMyAccountPageVisible();
    expect(loggedIn).toBeTruthy();
  });

  await test.step('5) Search for a known product and add it to the cart', async () => {
    await homePage.searchForProduct(knownProduct.productName);

    const resultVisible = await searchResultsPage.isProductVisible(knownProduct.productName);
    expect(resultVisible).toBeTruthy();

    await searchResultsPage.openProduct(knownProduct.productName);

    const detailsVisible = await productPage.isProductDetailsVisible();
    expect(detailsVisible).toBeTruthy();

    await productPage.addToCart(Number(knownProduct.productQuantity));
  });

  await test.step('6) Validate the product and cart totals', async () => {
    await cartPage.openCart();

    const productInCart = await cartPage.isProductVisible(knownProduct.productName);
    expect(productInCart).toBeTruthy();

    const quantity = await cartPage.getQuantity(knownProduct.productName);
    expect(quantity).toBe(Number(knownProduct.productQuantity));

    const price = await cartPage.getUnitPrice(knownProduct.productName);
    expect(price).toBeGreaterThan(0);

    const total = await cartPage.getCartTotal();
    expect(total).toBeGreaterThan(0);
    expect(total).toBeCloseTo(price * quantity, 2);
  });

  console.log('✅ OpenCart customer journey finished successfully without errors.');
});
