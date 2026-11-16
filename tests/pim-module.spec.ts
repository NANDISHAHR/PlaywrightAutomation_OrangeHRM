import { test, expect } from "../fixtures/hooks-fixtures";
import pimModuleData from "../testdata/pim-module.json";

test(
  "Add new Employee in the PIM module",
  {
    tag: ["@UI", "@UAT"],
    annotation: {
      type: "Test Case Link",
      description: "URL of the test case",
    },
  },
  
  async ({gotoUrl, page, leftNavigationPage, pimPage }) => {
    await test.step("Open PIM module", async () => {
      await leftNavigationPage.openPIMModule();
    });

    await test.step("Add a employee", async () => {
      await pimPage.addEmployee(
        pimModuleData.FIRST_NAME,
        pimModuleData.MIDDLE_NAME,
        pimModuleData.LAST_NAME,
      );
    });

    await test.step("Verify the newly added employee", async () => {
      await expect(pimPage.newEmployeeHeading).toHaveText(
        `${pimModuleData.FIRST_NAME} ${pimModuleData.LAST_NAME}`,
      );
    });
  },
);

