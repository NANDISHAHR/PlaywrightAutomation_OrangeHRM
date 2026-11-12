import { test } from "../fixtures/utils-fixtures";
import { expect } from "@playwright/test";

test("Global set up for Auto login", async ({
  page,
  loginPage,
  commonUtils,
  dashboard,
}) => {
  await loginPage.gotoOrangeHRM();
  const descyptedUsername = commonUtils.decryptData(process.env.USER_NAME!);
  const decryptedPassword = commonUtils.decryptData(process.env.PASSWORD!);
  await loginPage.doLogin(descyptedUsername, decryptedPassword);
  await page.waitForURL(
    `${process.env.BASE_URL}/web/index.php/dashboard/index`,
  );
  await expect(dashboard.dashboardTitleText).toHaveText("Dashboard");
  await page.context().storageState({
    path : './playwright/.auth/auth.json'
  })
});
