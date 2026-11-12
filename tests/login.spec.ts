import { expect } from "@playwright/test";
import { test } from "../fixtures/hooks-fixtures";

test.describe("Login to Orange HRM application", () => {
  test("Login to Orange HRM application", async ({ gotoUrl, page, logout }) => {
    console.log(await page.title());
  });

  test("Temp test 2", async ({ page, gotoUrl, logout }) => {
    await expect(page).toHaveTitle("OrangeHRM");
  });
});
