import { type Locator, type Page } from '@playwright/test';

export class SearchPage {
  readonly page: Page;
  readonly searchBox: Locator;
  readonly searchButton: Locator;
  readonly productNames: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchBox = page.getByRole('textbox', { name: 'Search' });
    this.searchButton = page.getByRole('button', { name: 'Search' });
    this.productNames = page.getByRole('heading', { level: 5 });
  }

  async goto() {
    await this.page.goto('https://practicesoftwaretesting.com/');
  }

  async search(term: string) {
    await this.searchBox.fill(term);
    await this.searchButton.click();
  }

  async getProductNames(): Promise<string[]> {
    const names = await this.productNames.allTextContents();
    return names.map((name) => name.trim()).filter((name) => name !== '');
  }
}