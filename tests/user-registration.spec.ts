import { test, expect } from '../base';
const baseUrl = 'https://qa-practice.razvanvancea.ro/';

test.describe('User registration test suite', () => {
  test.beforeEach(async ({ page, leftSideMenuPage }) => {
    await page.goto(`${baseUrl}`);
    await leftSideMenuPage.formsBtn.click();
    await leftSideMenuPage.registerBtn.click();
  });

  test('registration test @smoke', async ({ page, registerPage }) => {
    await registerPage.firstNameField.fill('John');
    await registerPage.lastNameField.fill('Doe');
    await registerPage.phoneField.fill('111111');
    await registerPage.selectDropdownCountryOption('Afganistan');
    await registerPage.emailField.fill('test@test.com');
    await registerPage.passwordField.fill('111111');
    await registerPage.checkbox.check();
    await registerPage.registerButton.click();
    await expect(page.getByText('The account has been')).toBeVisible();
  });

  test('register test - validation on email field', async ({ page, registerPage }) => {
    await registerPage.registerButton.click();
    const message = await page
      .getByRole('textbox', { name: 'Enter email' })
      .evaluate((el: HTMLInputElement) => el.validationMessage);
    await expect(message).toContain('Please fill');
  });

  test('register test - validation on password field', async ({ page, registerPage }) => {
    await registerPage.emailField.fill('test@example.com');
    await registerPage.registerButton.click();
    const message = await page
      .getByRole('textbox', { name: 'Password' })
      .evaluate((el: HTMLInputElement) => el.validationMessage);
    await expect(message).toContain('Please fill');
  });
});
