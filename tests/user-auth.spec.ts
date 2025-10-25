import { test, expect } from '../base';
const baseUrl = 'https://qa-practice.razvanvancea.ro/';

test.describe('User authentication test suite', () => {
  test.beforeEach(async ({ page, leftSideMenuPage }) => {
    await page.goto(`${baseUrl}`);
    await leftSideMenuPage.ecommerceBtn.click();
  });

  test('login test @smoke', async ({ page, loginPage }) => {
    await loginPage.doLogin('admin@admin.com', 'admin123');
    await expect(page.getByRole('link', { name: 'Log Out' })).toBeVisible();
  });

  test('login test - invalid email @regression', async ({ page, loginPage }) => {
    await loginPage.doLogin('test', 'admin123');
    await expect(page.getByText('Bad credentials! Please try')).toBeVisible();
  });

  test('login test - invalid password @regression', async ({ page, loginPage }) => {
    await loginPage.doLogin('admin@admin.com', '123');
    await expect(page.getByText('Bad credentials! Please try')).toBeVisible();
  });

  test('Login test - empthy fields', async ({ page, loginPage }) => {
    await loginPage.submitBtn.click();
    await expect(page.getByText('Bad credentials! Please try')).toBeVisible();
  });

  test('Login test - invalid format email', async ({ page, loginPage }) => {
    await loginPage.emailField.fill('admin');
    await loginPage.submitBtn.click();
    const message = await page
      .getByPlaceholder('Enter email - insert admin@admin.com')
      .evaluate((el: HTMLInputElement) => el.validationMessage);
    await expect(message).toContain("Please include an '@'");
  });

  test('Logout button test', async ({ page, loginPage }) => {
    await loginPage.doLogin('admin@admin.com', 'admin123');
    await expect(loginPage.logoutBtn).toBeVisible();
    await loginPage.logoutBtn.click();
    await expect(page.getByRole('link', { name: 'Log Out' })).not.toBeVisible();
  });
});
