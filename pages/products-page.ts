import { test, expect, Locator, Page } from '@playwright/test';

export class ProductsPage {
  page: Page;
  product: Locator;
  goToCheckoutBtn: Locator;
  removeProductBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.product = page.getByRole('button', { name: 'ADD TO CART' });
    this.goToCheckoutBtn = page.getByRole('button', { name: 'PROCEED TO CHECKOUT' });
    this.removeProductBtn = page.getByRole('button', { name: 'REMOVE' });
  }

  async selectFirstProduct() {
    await this.product.first().click();
  }
}
