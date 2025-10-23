import { test, expect } from '@playwright/test';
import { HompePage } from '../pages/home.page';
const baseUrl = 'https://qa-practice.razvanvancea.ro/';

test.describe('Homepage test suite', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${baseUrl}`);
  });

  test('k6 "Click here" button test', async ({ page }) => {
    const homepage = new HompePage(page);

    const page1Promise = page.waitForEvent('popup');
    await homepage.clickFirstClickHereBtn();
    const page1 = await page1Promise;
    await page1.getByRole('button', { name: 'Reject the use of cookies and' }).click();

    await expect(page1.getByRole('link', { name: 'k6 - Load Testing' })).toBeVisible();
  });

  test('Playwright "Click here" button test', async ({ page }) => {
    const homepage = new HompePage(page);

    const page1Promise = page.waitForEvent('popup');
    await homepage.clickSecondClickHereBtn();
    const page1 = await page1Promise;
    await page1.getByRole('button', { name: 'Reject the use of cookies and' }).click();

    await expect(page1.getByRole('link', { name: 'Playwright - E2E Reliable' })).toBeVisible();
  });

  test('Cypress "Click here" button test', async ({ page }) => {
    const homepage = new HompePage(page);

    const page1Promise = page.waitForEvent('popup');
    await homepage.clickThirdClickHereBtn();
    const page1 = await page1Promise;
    await page1.getByRole('button', { name: 'Reject the use of cookies and' }).click();

    await expect(page1.getByRole('link', { name: 'E2E Testing - Cypress' })).toBeVisible();
  });

  test('TestCafe "Click here" button test', async ({ page }) => {
    const homepage = new HompePage(page);

    const page1Promise = page.waitForEvent('popup');
    await homepage.clickFourthClickHereBtn();
    const page1 = await page1Promise;
    await page1.getByRole('button', { name: 'Reject the use of cookies and' }).click();

    await expect(page1.getByRole('link', { name: 'TestCafe - From 0 to Testing' })).toBeVisible();
  });

  test('PactumJs "Click here" button test', async ({ page }) => {
    const homepage = new HompePage(page);

    const page1Promise = page.waitForEvent('popup');
    await homepage.clickFifthClickHereBtn();
    const page1 = await page1Promise;
    await page1.getByRole('button', { name: 'Reject the use of cookies and' }).click();

    await expect(page1.getByRole('link', { name: 'API Automation - PactumJS' })).toBeVisible();
  });
});
