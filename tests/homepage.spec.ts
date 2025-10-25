import { test, expect } from '../base';
const baseUrl = 'https://qa-practice.razvanvancea.ro/';

test.describe('Homepage test suite', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${baseUrl}`);
  });

  test('k6 "Click here" button test', async ({ page, homepage }) => {
    await expect(homepage.clickHereBtn.first()).toHaveAttribute(
      'href',
      'https://www.youtube.com/watch?v=XR2MAivt-9E&list=PLI-8Z_bwV1wW4titIGcBdfJBtqyVXYLUC'
    );
  });

  test('Playwright "Click here" button test', async ({ page, homepage }) => {
    await expect(homepage.clickHereBtn.nth(1)).toHaveAttribute(
      'href',
      'https://www.youtube.com/watch?v=j8HZpFjPPVU&list=PLI-8Z_bwV1wXPPWYnrr4eRba_9Z2XbjQ8'
    );
  });

  test('Cypress "Click here" button test', async ({ page, homepage }) => {
    await expect(homepage.clickHereBtn.nth(2)).toHaveAttribute(
      'href',
      'https://www.youtube.com/watch?v=m5dfyEQ5xis&list=PLI-8Z_bwV1wVQ3RzLDDjfin3owGQxxyBC'
    );
  });

  test('TestCafe "Click here" button test', async ({ page, homepage }) => {
    await expect(homepage.clickHereBtn.nth(3)).toHaveAttribute(
      'href',
      'https://www.youtube.com/watch?v=m5dfyEQ5xis&list=PLI-8Z_bwV1wXdMA-f1rBvjmIy0Qr9zfaE'
    );
  });

  test('PactumJs "Click here" button test', async ({ page, homepage }) => {
    await expect(homepage.clickHereBtn.nth(4)).toHaveAttribute(
      'href',
      'https://www.youtube.com/watch?v=UHoxxgxB6t8&list=PLI-8Z_bwV1wXUOnEH4gH2z6ctK4GtLrM4'
    );
  });
});
