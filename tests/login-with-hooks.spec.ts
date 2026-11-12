import { expect } from "@playwright/test";
import { test } from "../fixtures/hooks-fixtures";

test.describe("Login to Orange HRM application", () => {
  test.beforeEach("Before each hook", async ({ loginPage }) => {
    await loginPage.gotoOrangeHRM();
  });

  test.afterEach("After each hook", async ({ userPage }) => {
    await userPage.logout();
  });

  test("Login to Orange HRM application", async ({ page }) => {
    console.log(await page.title());
  });

  test("Temp test 2", async ({ page }) => {
    await expect(page).toHaveTitle("OrangeHRM");
  });
});
