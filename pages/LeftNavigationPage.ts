import { Locator, Page } from "@playwright/test";

export class LeftNavigationPage {
  readonly page: Page;
  readonly pimMenuLink: Locator;
  readonly orangeHRMLogo: Locator;
  readonly leftNavigationPanel: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pimMenuLink = page.getByRole("link", { name: "PIM" });
    this.orangeHRMLogo = page.getByRole("link", {
      name: "client brand banner",
    });
    this.leftNavigationPanel = page.locator(".oxd-sidepanel-body");
  }

  /**
   * Open the PIM module
   */
  async openPIMModule() {
    await this.pimMenuLink.click();
  }
}
