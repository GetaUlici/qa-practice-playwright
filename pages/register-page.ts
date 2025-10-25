import { test, expect, Locator, Page } from '@playwright/test';

export class RegisterPage {
  page: Page;
  firstNameField: Locator;
  lastNameField: Locator;
  phoneField: Locator;
  dropdownCountry: Locator;
  emailField: Locator;
  passwordField: Locator;
  checkbox: Locator;
  registerButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameField = page.getByRole('textbox', { name: 'First Name' });
    this.lastNameField = page.getByRole('textbox', { name: 'Last Name Phone number Country' });
    this.phoneField = page.getByRole('textbox', { name: 'Enter phone number' });
    this.dropdownCountry = page.locator('#countries_dropdown_menu');
    this.emailField = page.getByRole('textbox', { name: 'Enter email' });
    this.passwordField = page.getByRole('textbox', { name: 'Password' });
    this.checkbox = page.getByRole('checkbox', { name: 'I agree with the terms and' });
    this.registerButton = page.getByRole('button', { name: 'Register' });
  }

  async selectDropdownCountryOption(country: string) {
    await this.dropdownCountry.selectOption(country);
  }
}
