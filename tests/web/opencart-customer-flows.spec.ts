import { test, expect } from '../../fixtures/pageFixtures';
import { RandomDataUtil } from '../../utils/dataGenerator';
import { DataProvider } from '../../utils/DataReader';
import { Helper } from '../../utils/helper';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

interface LoginTestCase {
  testName?: string;
  TestName?: string;
  email: string;
  password: string;
  expected: 'success' | 'failure';
}

function getConfiguredCredentials(): { email: string; password: string } {
  const { APP_EMAIL: email, APP_PASSWORD: password } = process.env;
  if (!email || !password) {
    throw new Error('Set APP_EMAIL and APP_PASSWORD in .env to run the authenticated customer flows.');
  }
  return { email, password };
}

test('OpenCart customer registration @master @regression @web', async ({
  homePage,
  registerPage,
  myAccountPage,
}) => {
  const password = RandomDataUtil.getPassword(12);
  const customer = {
    firstName: RandomDataUtil.getFirstName(),
    lastName: RandomDataUtil.getLastName(),
    email: `customer.${Date.now()}.${RandomDataUtil.getNumber()}@example.com`,
    telephone: RandomDataUtil.getPhoneNumber(),
    password,
    confirmPassword: password,
  };

  await test.step('1) Open the registration page', async () => {
    await homePage.goto();
    await homePage.clickMyAccount();
    await homePage.clickRegister();
    expect(await registerPage.isRegisterPageVisible()).toBeTruthy();
  });

  await test.step('2) Register the new customer', async () => {
    await registerPage.completeRegistration(customer);
    expect(await registerPage.isRegistrationSuccessVisible()).toBeTruthy();
    expect(await myAccountPage.isLogoutLinkVisible()).toBeTruthy();
  });

  console.log('OpenCart customer registration completed successfully.');
});

test('OpenCart valid customer login @master @sanity @web', async ({
  homePage,
  loginPage,
  myAccountPage,
}) => {
  const { email, password } = getConfiguredCredentials();

  await test.step('1) Navigate to the login page', async () => {
    await homePage.goto();
    await homePage.clickMyAccount();
    await homePage.clickLogin();
    expect(await loginPage.isLoginPageVisible()).toBeTruthy();
  });

  await test.step('2) Log in and verify the customer account area', async () => {
    await loginPage.login(email, password);
    expect(await myAccountPage.isMyAccountPageVisible()).toBeTruthy();
    expect(await myAccountPage.isLogoutLinkVisible()).toBeTruthy();
  });

  console.log('OpenCart valid customer login completed successfully.');
});

test('OpenCart invalid customer login @master @regression @web', async ({
  homePage,
  loginPage,
  myAccountPage,
}) => {
  const invalidEmail = RandomDataUtil.getEmail();
  const invalidPassword = RandomDataUtil.getPassword();

  await test.step('1) Submit invalid customer credentials', async () => {
    await homePage.goto();
    await homePage.clickMyAccount();
    await homePage.clickLogin();
    await loginPage.login(invalidEmail, invalidPassword);
  });

  await test.step('2) Verify authentication is rejected', async () => {
    expect(await loginPage.isWarningVisible()).toBeTruthy();
    expect(await myAccountPage.isMyAccountPageVisible()).toBeFalsy();
  });

  console.log('OpenCart invalid customer login was rejected as expected.');
});

test('OpenCart customer logout @master @sanity @web', async ({
  homePage,
  loginPage,
  myAccountPage,
}) => {
  const { email, password } = getConfiguredCredentials();

  await test.step('1) Log in with a valid customer account', async () => {
    await homePage.goto();
    await homePage.clickMyAccount();
    await homePage.clickLogin();
    await loginPage.login(email, password);
    expect(await myAccountPage.isMyAccountPageVisible()).toBeTruthy();
  });

  await test.step('2) Log out and verify logged-out navigation', async () => {
    await myAccountPage.logout();
    expect(await myAccountPage.isLogoutConfirmationVisible()).toBeTruthy();
    await myAccountPage.continueAfterLogout();
    expect(await homePage.isApplicationHomeVisible()).toBeTruthy();
    expect(await homePage.isLoggedOutNavigationVisible()).toBeTruthy();
  });

  console.log('OpenCart customer logout completed successfully.');
});

test('OpenCart product search @master @sanity @web', async ({
  homePage,
  searchResultsPage,
  productPage,
}) => {
  const { productName } = Helper.getProductDetails();

  await test.step('1) Search for a known product', async () => {
    await homePage.goto();
    await homePage.searchForProduct(productName);
  });

  await test.step('2) Verify matching results and product details', async () => {
    expect(await searchResultsPage.isProductVisible(productName)).toBeTruthy();
    await searchResultsPage.openProduct(productName);
    expect(await productPage.isProductDetailsVisible()).toBeTruthy();
    expect(await productPage.getProductName()).toContain(productName);
  });

  console.log('OpenCart product search completed successfully.');
});

test('OpenCart add product to cart @master @regression @web', async ({
  homePage,
  searchResultsPage,
  productPage,
  cartPage,
}) => {
  const { productName } = Helper.getProductDetails();
  const quantity = 2;

  await test.step('1) Find the product and add the requested quantity', async () => {
    await homePage.goto();
    await homePage.searchForProduct(productName);
    expect(await searchResultsPage.isProductVisible(productName)).toBeTruthy();
    await searchResultsPage.openProduct(productName);
    expect(await productPage.isProductDetailsVisible()).toBeTruthy();
    await productPage.addToCart(quantity);
    expect(await productPage.getSuccessText()).toMatch(/success/i);
  });

  await test.step('2) Verify the product and quantity in the cart', async () => {
    await cartPage.openCart();
    expect(await cartPage.isProductVisible(productName)).toBeTruthy();
    expect(await cartPage.getQuantity(productName)).toBe(quantity);
  });

  console.log('OpenCart product was added to the cart successfully.');
});

const loginData = DataProvider.readJson(
  path.resolve(__dirname, '../../testdata/opencart_logindata.json'),
) as LoginTestCase[];

for (const [index, loginCase] of loginData.entries()) {
  const scenarioName = loginCase.testName || loginCase.TestName || `Login data row ${index + 1}`;

  test(`${scenarioName} - data row ${index + 1} @master @datadriven @web`, async ({
    homePage,
    loginPage,
    myAccountPage,
  }) => {
    await test.step('1) Submit the supplied login data', async () => {
      await homePage.goto();
      await homePage.clickMyAccount();
      await homePage.clickLogin();
      expect(await loginPage.isLoginPageVisible()).toBeTruthy();
      await loginPage.login(loginCase.email ?? '', loginCase.password ?? '');
    });

    await test.step('2) Verify the result matches the data row expectation', async () => {
      if (loginCase.expected === 'success') {
        expect(await myAccountPage.isMyAccountPageVisible()).toBeTruthy();
      } else {
        expect(loginCase.expected).toBe('failure');
        expect(await myAccountPage.isMyAccountPageVisible()).toBeFalsy();

        const hasServerError = await loginPage.isLoginErrorAlertVisible();
        const hasBrowserValidation = await loginPage.hasNativeValidationError();
        expect(hasServerError || hasBrowserValidation).toBeTruthy();
      }
    });
  });
}
