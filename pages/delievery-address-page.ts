import { test, expect, Locator, Page } from '@playwright/test';

export class DeliveryAddressPage {
  page: Page;
  phoneField: Locator;
  streetField: Locator;
  cityField: Locator;
  dropdownOption: Locator;
  submitOrderBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.phoneField = page.getByRole('textbox', { name: 'Enter phone number' });
    this.streetField = page.getByRole('textbox', { name: 'Little Streets' });
    this.cityField = page.getByRole('textbox', { name: 'London' });
    this.dropdownOption = page.locator('#countries_dropdown_menu');
    this.submitOrderBtn = page.getByRole('button', { name: 'Submit Order' });
  }

  async selectDropdownOption(city: string) {
    await this.dropdownOption.selectOption(city);
  }
}
