import { test, expect } from '@playwright/test';
import { HompePage } from '../pages/home.page';
import { YoutubePage } from '../pages/youtube.page';
const baseUrl = 'https://qa-practice.razvanvancea.ro/';

test.describe('Homepage test suite', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${baseUrl}`);
  });

  test('k6 "Click here" button test', async ({ page }) => {
    const homepage = new HompePage(page);
    const popupPromise = page.waitForEvent('popup');
    await homepage.selectFirstClickHereBtn();
    const youtubePage = await popupPromise;

    const ytPage = new YoutubePage(youtubePage);

    await ytPage.rejectBtn.click();
    await ytPage.verifyk6LinkVisible();
  });

  test('Playwright "Click here" button test', async ({ page }) => {
    const homepage = new HompePage(page);
    const popupPromise = page.waitForEvent('popup');
    await homepage.selectSecondClickHereBtn();
    const youtubePage = await popupPromise;

    const ytPage = new YoutubePage(youtubePage);

    await ytPage.rejectBtn.click();
    await ytPage.verifyPwLinkVisible();
  });

  test('Cypress "Click here" button test', async ({ page }) => {
    const homepage = new HompePage(page);
    const popupPromise = page.waitForEvent('popup');
    await homepage.selectThirdClickHereBtn();
    const youtubePage = await popupPromise;

    const ytPage = new YoutubePage(youtubePage);

    await ytPage.rejectBtn.click();
    await ytPage.verifyCyLinkVisible();
  });

  test('TestCafe "Click here" button test', async ({ page }) => {
    const homepage = new HompePage(page);
    const popupPromise = page.waitForEvent('popup');
    await homepage.selectFourthClickHereBtn();
    const youtubePage = await popupPromise;

    const ytPage = new YoutubePage(youtubePage);

    await ytPage.rejectBtn.click();
    await ytPage.verifyTestCafeLinkVisible();
  });

  test('PactumJs "Click here" button test', async ({ page }) => {
    const homepage = new HompePage(page);
    const popupPromise = page.waitForEvent('popup');
    await homepage.selectFifthClickHereBtn();
    const youtubePage = await popupPromise;

    const ytPage = new YoutubePage(youtubePage);

    await ytPage.rejectBtn.click();
    await ytPage.verifyPactumLinkVisible();
  });
});
