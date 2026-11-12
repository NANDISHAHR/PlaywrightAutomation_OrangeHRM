import { Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly invalidErrorMessage: Locator

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = this.page.getByRole("textbox", { name: "Username" });
    this.passwordInput = this.page.getByPlaceholder("Password");
    this.loginButton = this.page.getByRole("button", { name: "Login" });
    this.invalidErrorMessage = page.getByRole('alert');
  }

  /**
   * To open URL into browser
   */
  async gotoOrangeHRM() {
    await this.page.goto(`${process.env.BASE_URL}/web/index.php/auth/login`);
  }

  /**
   * To login to Orange HRM application
   * @param username
   * @param password
   */
  async doLogin(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
