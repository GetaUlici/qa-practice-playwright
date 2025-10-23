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
    await homepage.clickFirstClickHereBtn();
    const youtubePage = await popupPromise;

    const ytPage = new YoutubePage(youtubePage);

    await ytPage.rejectBtn.click();
    await ytPage.verifyk6LinkVisible();
  });

  // test.only('demo', async ({ page }) => {
  //   const homepage = new HompePage(page);
  //   const page1Promise = page.waitForEvent('popup');
  //   await homepage.clickFirstClickHereBtn();
  //   const page1 = await page1Promise;
  //       const ytPage = new YoutubePage(youtubePage);


  //   await page1.getByRole('button', { name: 'Reject the use of cookies and' }).click();
  //   await expect(page1.getByRole('link', { name: 'k6 - Load Testing' })).toBeVisible();

  // });

  test('Playwright "Click here" button test', async ({ page }) => {
    const homepage = new HompePage(page);
    const popupPromise = page.waitForEvent('popup');
    await homepage.clickSecondClickHereBtn();
    const youtubePage = await popupPromise;

    const ytPage = new YoutubePage(youtubePage);

    await ytPage.rejectBtn.click();
    await ytPage.verifyPwLinkVisible();
  });

  test('Cypress "Click here" button test', async ({ page }) => {
    const homepage = new HompePage(page);
    const popupPromise = page.waitForEvent('popup');
    await homepage.clickThirdClickHereBtn();
    const youtubePage = await popupPromise;

    const ytPage = new YoutubePage(youtubePage);

    await ytPage.rejectBtn.click();
    await ytPage.verifyCyLinkVisible();
  });

  test('TestCafe "Click here" button test', async ({ page }) => {
    const homepage = new HompePage(page);
    const popupPromise = page.waitForEvent('popup');
    await homepage.clickFourthClickHereBtn();
    const youtubePage = await popupPromise;

    const ytPage = new YoutubePage(youtubePage);

    await ytPage.rejectBtn.click();
    await ytPage.verifyTestCafeLinkVisible();
  });

  test('PactumJs "Click here" button test', async ({ page }) => {
    const homepage = new HompePage(page);
    const popupPromise = page.waitForEvent('popup');
    await homepage.clickFifthClickHereBtn();
    const youtubePage = await popupPromise;

    const ytPage = new YoutubePage(youtubePage);

    await ytPage.rejectBtn.click();
    await ytPage.verifyPactumLinkVisible();
  });
});
