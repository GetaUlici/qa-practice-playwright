# 🧪 QA Practice Playwright

[![Playwright](https://img.shields.io/badge/tested%20with-Playwright-45ba4b.svg)](https://playwright.dev)
[![TypeScript](https://img.shields.io/badge/language-TypeScript-blue.svg)](https://www.typescriptlang.org/)

Automated end-to-end tests for [**QA Practice App**](https://qa-practice.razvanvancea.ro/) using **Playwright**, **TypeScript**, and the **Page Object Model (POM)**.

---

## 🚀 Tech Stack

- [🎭 **Playwright**](https://playwright.dev/) – Browser automation framework  
- 💙 **TypeScript** – Strongly typed language support  
- 🧩 **POM (Page Object Model)** – Clean, maintainable structure  
- 🧪 **Playwright Test Runner** – Built-in assertions & HTML reports  

---

## 📁 Project Structure

```
.
├── pages/           # Page Object classes
├── tests/           # Test specs
├── fixtures/        # Test data and reusable setups
├── playwright.config.ts
├── tsconfig.json
└── package.json
```

---

## ⚙️ Setup

```bash
git clone https://github.com/GetaUlici/qa-practice-playwright
cd qa-practice-playwright
npm install
npx playwright install
```

---

## 🧪 Run Tests

```bash
npx playwright test                     # run all tests
npx playwright test --headed            # run with browser UI
npx playwright test --project=chromium  # run in a specific browser
npx playwright show-report              # open HTML report
```

---

## 🪲 Debug Tests

Playwright offers a built-in **debug mode** and **trace viewer** for diagnosing issues.

```bash
npx playwright test --debug              # step through tests interactively
npx playwright show-trace trace.zip      # view a recorded trace
```

💡 Enable **video**, **screenshot**, or **trace recording** in `playwright.config.ts` for deeper visibility.

---

## 🧩 Example Test

```ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { LeftSideMenuPage } from '../pages/left-side-menu.page';

const baseUrl = 'https://qa-practice.razvanvancea.ro/';

test.describe('User authentication test suite', () => {
  test.beforeEach(async ({ page }) => {
    const leftSideMenuPage = new LeftSideMenuPage(page);
    await page.goto(baseUrl);
    await leftSideMenuPage.ecommerceBtn.click();
  });

  test('login test @smoke', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.doLogin('admin@admin.com', 'admin123');
    await expect(page.getByRole('link', { name: 'Log Out' })).toBeVisible();
  });
});
```

---

## 🏗️ Page Object Example

```ts
import { Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailField: Locator;
  readonly pswField: Locator;
  readonly submitBtn: Locator;
  readonly logoutBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailField = page.getByRole('textbox', { name: 'Email' });
    this.pswField = page.getByRole('textbox', { name: 'Password' });
    this.submitBtn = page.getByRole('button', { name: 'Submit' });
    this.logoutBtn = page.getByRole('link', { name: 'Log Out' });
  }

  async doLogin(email: string, password: string) {
    await this.emailField.fill(email);
    await this.pswField.fill(password);
    await this.submitBtn.click();
  }
}
```

---

## 💡 Tips & Best Practices

- Keep **selectors** and **page actions** isolated inside Page Object files.  
- Use **fixtures** for test data and setup logic.  
- Run tests interactively with:
  ```bash
  npx playwright test --ui
  ```
- Filter by tags or titles:
  ```bash
  npx playwright test -g "@smoke"
  ```

---

## 📊 Reports & Artifacts

| Type | Command | Description |
|------|----------|-------------|
| 🧾 **HTML Report** | `npx playwright show-report` | Opens the full test report |
| 🎥 **Trace Viewer** | `npx playwright show-trace trace.zip` | Visual replay of each step |
| 📸 **Screenshots / Videos** | Configurable in `playwright.config.ts` | Captures evidence for failed tests |

Reports are stored under:
```
playwright-report/
test-results/
```


