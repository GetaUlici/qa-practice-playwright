import { test, expect } from '../base';
const baseUrl = 'https://qa-practice.razvanvancea.ro/';

test.describe('Navbar test suite', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${baseUrl}`);
  });

  test('Home button test', async ({ page, navbarPage }) => {
    await navbarPage.contactBtn.click();
    await navbarPage.homeBtn.click();
    await expect(page.getByRole('heading', { name: 'Welcome!' })).toBeVisible();
  });

  test('Contact button test', async ({ page, navbarPage }) => {
    await navbarPage.contactBtn.click();
    await expect(page.getByRole('heading', { name: 'Contact us' })).toBeVisible();
  });
});
