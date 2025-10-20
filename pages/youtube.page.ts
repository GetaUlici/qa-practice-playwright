import { test, expect, Locator, Page } from '@playwright/test';

export class YoutubePage {
  page: Page;
  rejectBtn: Locator;
  k6Link: Locator;
  pwLink: Locator;
  cyLink: Locator;
  testCafeLink: Locator;
  pactumLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.rejectBtn = page.getByRole('button', { name: 'Reject the use of cookies and' });
    this.k6Link = page.getByRole('link', { name: 'k6 - Load Testing' });
    this.pwLink = page.getByRole('link', { name: 'Playwright - E2E Reliable' });
    this.cyLink = page.getByRole('link', { name: 'E2E Testing - Cypress' });
    this.testCafeLink = page.getByRole('link', { name: 'TestCafe - From 0 to Testing' });
    this.pactumLink = page.getByRole('link', { name: 'API Automation - PactumJS' });
  }

  async verifyk6LinkVisible() {
    await expect(this.k6Link).toBeVisible();
  }

  async verifyPwLinkVisible() {
    await expect(this.pwLink).toBeVisible();
  }

  async verifyCyLinkVisible() {
    await expect(this.cyLink).toBeVisible();
  }

  async verifyTestCafeLinkVisible() {
    await expect(this.testCafeLink).toBeVisible();
  }

  async verifyPactumLinkVisible() {
    await expect(this.pactumLink).toBeVisible();
  }
}
