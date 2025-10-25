import { test, expect, Locator, Page } from '@playwright/test';

export class LeftSideMenuPage {
  page: Page;
  ecommerceBtn: Locator;
  formsBtn: Locator;
  registerBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.ecommerceBtn = page.getByRole('link', { name: 'Ecommerce - Login, Add to' });
    this.formsBtn = page.getByRole('link', { name: 'Forms' });
    this.registerBtn = page.getByRole('link', { name: 'Register' });
  }
}
