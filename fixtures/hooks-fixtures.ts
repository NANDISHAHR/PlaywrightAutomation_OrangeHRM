import { test as baseTest } from "./utils-fixtures";

type HooksFixturesType = {
  gotoUrl: any;
  logout: any;
};

export const test = baseTest.extend<HooksFixturesType>({
  gotoUrl: async (
    { loginPage }: { loginPage: any },
    use: (value: any) => Promise<void>,
  ) => {
    await loginPage.gotoOrangeHRM();
    await use(undefined);
  },
  logout: async (
    { userPage }: { userPage: any },
    use: (value: any) => Promise<void>,
  ) => {
    await use(undefined);
    await userPage.logout();
  },
});
export { expect } from "@playwright/test";
