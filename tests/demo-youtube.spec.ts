import { test, expect } from '@playwright/test';

test('Test Youtube', async ({ page }) => {
  await page.goto('http://qa-practice.razvanvancea.ro/');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'CLICK HERE to get started!' }).first().click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'Reject the use of cookies and' }).click();
  await expect(page1.getByRole('link', { name: 'k6 - Load Testing' })).not.toBeVisible();
});