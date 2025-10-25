import { test, expect, Locator, Page } from '@playwright/test';

export class HompePage {
  page: Page;
  clickHereBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.clickHereBtn = page.getByRole('link', { name: 'CLICK HERE to get started!' });
  }
}
