import { test, expect, Locator, Page } from '@playwright/test';

export class LoginPage {
  page: Page;
  emailField: Locator;
  pswField: Locator;
  submitBtn: Locator;
  logoutBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailField = page.getByRole('textbox', { name: 'Email' });
    this.pswField = page.getByRole('textbox', { name: 'Password' });
    this.submitBtn = page.getByRole('button', { name: 'Submit' });
    this.logoutBtn = page.getByRole('link', { name: 'Log Out' });
  }

  async doLogin(email: string, password: string) {
    await this.emailField.fill(email);
    await this.pswField.fill(password);
    await this.submitBtn.click();
  }
}
