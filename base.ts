import { test as baseTest } from '@playwright/test';
import { LoginPage } from './pages/login-page';
import { NavbarPage } from './pages/navbar-page';
import { RegisterPage } from './pages/register-page';
import { ProductsPage } from './pages/products-page';
import { DeliveryAddressPage } from './pages/delievery-address-page';
import { HompePage } from './pages/home-page';
import { LeftSideMenuPage } from './pages/left-side-menu-page';

type MyFixtures = {
  loginPage: LoginPage;
  navbarPage: NavbarPage;
  registerPage: RegisterPage;
  productsPage: ProductsPage;
  delieveryAddressPage: DeliveryAddressPage;
  homepage: HompePage;
  leftSideMenuPage: LeftSideMenuPage;
};

export const test = baseTest.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  navbarPage: async ({ page }, use) => {
    await use(new NavbarPage(page));
  },

  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },

  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },

  delieveryAddressPage: async ({ page }, use) => {
    await use(new DeliveryAddressPage(page));
  },

  homepage: async ({ page }, use) => {
    await use(new HompePage(page));
  },

  leftSideMenuPage: async ({ page }, use) => {
    await use(new LeftSideMenuPage(page));
  },
});

export { expect } from '@playwright/test';
