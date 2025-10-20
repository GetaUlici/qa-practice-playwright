import { test, expect } from '@playwright/test';
import { LeftSideMenuPage } from '../pages/left-side-menu.page';
import { RegistrationPage } from '../pages/registration.page';
const baseUrl = 'https://qa-practice.razvanvancea.ro/';

test.describe('User registration test suite', () => {
  test.beforeEach(async ({ page }) => {
    const leftSideMenuPage = new LeftSideMenuPage(page);

    await page.goto(`${baseUrl}`);
    await leftSideMenuPage.formsBtn.click();
    await leftSideMenuPage.registerBtn.click();
  });

  test('registration test @smoke', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);

    await registrationPage.firstNameField.fill('John');
    await registrationPage.lastNameField.fill('Doe');
    await registrationPage.phoneField.fill('111111');
    await registrationPage.selectDropdownCountryOption('Afganistan');
    await registrationPage.emailField.fill('test@test.com');
    await registrationPage.passwordField.fill('111111');
    await registrationPage.checkbox.check();
    await registrationPage.registerButton.click();

    await expect(page.getByText('The account has been')).toBeVisible();
  });

  test('register test - validation on email field', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);

    await registrationPage.registerButton.click();
    const message = await page
      .getByRole('textbox', { name: 'Enter email' })
      .evaluate((el: HTMLInputElement) => el.validationMessage);

    expect(message).toContain('Please fill in this field.');
  });

  test('register test - validation on password field', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);

    await registrationPage.emailField.fill('test@example.com');
    await registrationPage.registerButton.click();
    const message = await page
      .getByRole('textbox', { name: 'Password' })
      .evaluate((el: HTMLInputElement) => el.validationMessage);

    expect(message).toContain('Please fill in this field.');
  });
});
