import { test, expect, Locator, Page } from '@playwright/test';

export class NavbarPage {
  page: Page;
  homeBtn: Locator;
  contactBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.homeBtn = page.getByRole('link', { name: 'Home' });
    this.contactBtn = page.getByRole('link', { name: 'Contact' });
  }
}
