import { test, expect } from "../fixtures/hooks-fixtures";
import loginData from "../testdata/login-module.json";

test.use({
  storageState: { cookies: [], origins: [] },
});

test("[Login] Verify that the user cannot log in with an invalid password", async ({
  gotoUrl,
  commonUtils,
  loginPage,
}) => {
  const descyptedUsername = commonUtils.decryptData(process.env.USER_NAME!);
  await loginPage.doLogin(descyptedUsername, loginData.INVALID_PASSWORD);
  await expect(loginPage.invalidErrorMessage).toHaveText(
    loginData.INVALID_ERROR_MESSAGE,
  );
  await expect(loginPage.usernameInput).toBeVisible();
});

test("[Login] Verify that the user cannot log in with an invalid username", async ({
  gotoUrl,
  commonUtils,
  loginPage,
}) => {
  const descyptedPassword = commonUtils.decryptData(process.env.PASSWORD!);
  await loginPage.doLogin(loginData.INVALID_USERNAME, descyptedPassword);
  await expect(loginPage.invalidErrorMessage).toHaveText(
    loginData.INVALID_ERROR_MESSAGE,
  );
  await expect(loginPage.usernameInput).toBeVisible();
});

test("[Login] Verify that the user cannot log in with an invalid username and password ", async ({
  gotoUrl,
  commonUtils,
  loginPage,
}) => {
  await loginPage.doLogin(
    loginData.INVALID_USERNAME,
    loginData.INVALID_PASSWORD,
  );
  await expect(loginPage.invalidErrorMessage).toHaveText(
    loginData.INVALID_ERROR_MESSAGE,
  );
  await expect(loginPage.usernameInput).toBeVisible();
});
