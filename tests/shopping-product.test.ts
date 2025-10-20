import { test, expect } from '@playwright/test';
import { LeftSideMenuPage } from '../pages/left-side-menu.page';
import { LoginPage } from '../pages/login.page';
import { ProductsPage } from '../pages/products.page';
import { DeliveryAddressPage } from '../pages/delievery-address.page';
const baseUrl = 'https://qa-practice.razvanvancea.ro/';

test.describe('Shopping product test suite', () => {
  test.beforeEach(async ({ page }) => {
    const leftSideMenuPage = new LeftSideMenuPage(page);

    await page.goto(`${baseUrl}`);
    await leftSideMenuPage.ecommerceBtn.click();
  });

  test('Shopping a product test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const delieveryAddressPage = new DeliveryAddressPage(page);

    await loginPage.doLogin('admin@admin.com', 'admin123');
    await expect(loginPage.logoutBtn).toBeVisible();
    await productsPage.selectFirstProduct();
    await productsPage.goToCheckoutBtn.click();
    await delieveryAddressPage.phoneField.fill('1111');
    await delieveryAddressPage.streetField.fill('Street');
    await delieveryAddressPage.cityField.fill('Cluj');
    await delieveryAddressPage.selectDropdownOption('Romania');
    await delieveryAddressPage.submitOrderBtn.click();
    await expect(page.getByText('Congrats! Your order of $905.')).toBeVisible();
  });

  test('Remove product from cart test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    await loginPage.doLogin('admin@admin.com', 'admin123');
    await expect(loginPage.logoutBtn).toBeVisible();
    await productsPage.selectFirstProduct();
    await expect(page.getByText('Apple iPhone 12, 128GB, Black $905.99 REMOVE')).toBeVisible();
    await productsPage.removeProductBtn.click();
    await expect(page.getByText('Apple iPhone 12, 128GB, Black $905.99 REMOVE')).not.toBeVisible();
  });
});
