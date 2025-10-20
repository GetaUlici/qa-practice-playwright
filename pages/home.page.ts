import { test, expect, Locator, Page } from '@playwright/test';

export class HompePage {
  page: Page;
  clickHereBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.clickHereBtn = page.getByRole('link', { name: 'CLICK HERE to get started!' });
  }

  async clickFirstClickHereBtn() {
    await this.clickHereBtn.first().click();
  }

  async clickSecondClickHereBtn() {
    await this.clickHereBtn.nth(1).click();
  }

  async clickThirdClickHereBtn() {
    await this.clickHereBtn.nth(2).click();
  }

  async clickFourthClickHereBtn() {
    await this.clickHereBtn.nth(3).click();
  }

  async clickFifthClickHereBtn() {
    await this.clickHereBtn.nth(4).click();
  }
}
