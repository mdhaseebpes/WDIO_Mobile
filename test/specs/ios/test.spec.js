import { $, expect, driver } from "@wdio/globals";

describe("To do ", () => {
  it("Create list", async () => {
    await $("//XCUIElementTypeStaticText[@name='Create list']").click();
    await $("-ios predicate string:value == 'List Name'").addValue(
      "Things to do success"
    );
    await $("~Create").click();
    await expect($("~Things to do success")).toBeExisting();

    await $("~Things to do success").click();

    // Create Todo Items
    await $(
      "-ios class chain:**/XCUIElementTypeStaticText[`name == 'Create item'`]"
    ).click();
    await $("-ios predicate string:value == 'Title'").addValue(
      "Complete WDIO course"
    );

    await $("//XCUIElementTypeTextField[@value='Due']").click();

    await $("~19").click();

    await $("//XCUIElementTypeStaticText[@name='Add To Do']").click();

    await $("~Create").click();

    //assertion
    await expect($("~Complete WDIO course")).toBeExisting();
    await expect($("~Due Tomorrow")).toBeExisting();

    await driver.pause(2000);
  });
});
