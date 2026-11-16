import { test, expect } from "../fixtures/hooks-fixtures";
import loginData from "../testdata/login-module.json";

test.describe(
  "Login Functionality for Ornage HRM application",
  {
    tag: ["@Login"],
    annotation: { type: "Story Link", description: "Linke of the story" },
  },
  () => {
    test.use({
      storageState: { cookies: [], origins: [] },
    });
    test(
      "[Login] Verify that the user cannot log in with an invalid password",
      {
        tag: ["@UI", "@UAT"],
        annotation: {
          type: "Test Case Link",
          description: "URL of the test case",
        },
      },
      async ({ gotoUrl, commonUtils, loginPage }) => {
        const descyptedUsername = commonUtils.decryptData(
          process.env.USER_NAME!,
        );
        await loginPage.doLogin(descyptedUsername, loginData.INVALID_PASSWORD);
        await expect(loginPage.invalidErrorMessage).toHaveText(
          loginData.INVALID_ERROR_MESSAGE,
        );
        await expect(loginPage.usernameInput).toBeVisible();
      },
    );

    test(
      "[Login] Verify that the user cannot log in with an invalid username",
      {
        tag: ["@UI", "@UAT"],
        annotation: {
          type: "Test Case Link",
          description: "URL of the test case",
        },
      },
      async ({ gotoUrl, commonUtils, loginPage }) => {
        const descyptedPassword = commonUtils.decryptData(
          process.env.PASSWORD!,
        );
        await loginPage.doLogin(loginData.INVALID_USERNAME, descyptedPassword);
        await expect(loginPage.invalidErrorMessage).toHaveText(
          loginData.INVALID_ERROR_MESSAGE,
        );
        await expect(loginPage.usernameInput).toBeVisible();
      },
    );

    test(
      "[Login] Verify that the user cannot log in with an invalid username and password ",
      {
        tag: ["@UI", "@UAT", "@DEV"],
        annotation: {
          type: "Test Case Link",
          description: "URL of the test case",
        },
      },
      async ({ gotoUrl, loginPage }) => {
        await loginPage.doLogin(
          loginData.INVALID_USERNAME,
          loginData.INVALID_PASSWORD,
        );
        await expect(loginPage.invalidErrorMessage).toHaveText(
          loginData.INVALID_ERROR_MESSAGE,
        );
        await expect(loginPage.usernameInput).toBeVisible();
      },
    );

    test(
      "[Login] Verify that the user cannot log in with an valid username and password",
      {
        tag: ["@VISUAL", "@UAT"],
        annotation: {
          type: "Test case link",
          description: "URl of the test case",
        },
      },
      async ({ gotoUrl, loginPage, commonUtils, leftNavigationPage }) => {

        const descyptedUsername = commonUtils.decryptData(
          process.env.USER_NAME!,
        );
        const descyptedPassword = commonUtils.decryptData(
          process.env.PASSWORD!,
        );
        await loginPage.doLogin(
         descyptedUsername,
         descyptedPassword,
        );

        await expect(leftNavigationPage.orangeHRMLogo).toHaveScreenshot('OrangeHRMBrandLogo.png')
        await expect(leftNavigationPage.leftNavigationPanel).toHaveScreenshot('LeftNavigationPanel.png')
      
      },
    );
  },
);
