import { test, expect, Locator, Page } from '@playwright/test';

export class HompePage {
  page: Page;
  clickHereBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.clickHereBtn = page.getByRole('link', { name: 'CLICK HERE to get started!' });
  }

  async selectFirstClickHereBtn() {
    await this.clickHereBtn.first().click();
  }

  async selectSecondClickHereBtn() {
    await this.clickHereBtn.nth(1).click();
  }

  async selectThirdClickHereBtn() {
    await this.clickHereBtn.nth(2).click();
  }

  async selectFourthClickHereBtn() {
    await this.clickHereBtn.nth(3).click();
  }

  async selectFifthClickHereBtn() {
    await this.clickHereBtn.nth(4).click();
  }
}
