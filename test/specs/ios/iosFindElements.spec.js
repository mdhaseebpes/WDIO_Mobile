import { $, $$, expect, driver } from "@wdio/globals";

describe("ios find element", () => {
  it("find by accessibility", async () => {
    await $("~Alert Views").click();
    await $("~Simple").click();

    await expect(await driver.getAlertText()).toContain(
      "A Short Title Is Best\nA message should be a short, complete sentence."
    );
  });

  it("find by tagname", async () => {
    //single element
    console.log(await $("XCUIElementTypeStaticText").getText());

    //multiple elements
    const textElements = await $$("XCUIElementTypeStaticText");
    for (const ele of textElements) {
      console.log(await ele.getText());
    }
  });

  it("find by Xpath", async () => {
    //xpath = (//tagname[@attribute= value])
    await $('//XCUIElementTypeStaticText[@name="Alert Views"]').click();
    await $('//XCUIElementTypeStaticText[@label="Simple"]').click();

    await expect(await driver.getAlertText()).toContain(
      "A Short Title Is Best\nA message should be a short, complete sentence."
    );
  });

  it("find by ios class chain", async () => {
    //resource --https://github.com/facebookarchive/WebDriverAgent/wiki/Class-Chain-Queries-Construction-Rules
    //const alert = '**/XCUIElementTypeStaticText[`@name="Alert Views"`]';
    const alert = '**/XCUIElementTypeStaticText[`label CONTAINS "Alert"`]';
    await $(`-ios class chain:${alert}`).click();

    const simpleText =
      '**/XCUIElementTypeStaticText[`label CONTAINS "Simple"`]';
    await $(`-ios class chain:${simpleText}`).click();

    await expect(await driver.getAlertText()).toContain(
      "A Short Title Is Best\nA message should be a short, complete sentence."
    );
  });

  it("find by predicate string", async () => {
    //resource --//https://github.com/facebookarchive/WebDriverAgent/wiki/Predicate-Queries-Construction-Rules

    const alert = "label == 'Alert Views'";
    await $(`-ios predicate string:${alert}`).click();

    const simpleText = 'value BEGINSWITH[c] "simple"';
    await $(`-ios predicate string:${simpleText}`).click();

    await expect(await driver.getAlertText()).toContain(
      "A Short Title Is Best\nA message should be a short, complete sentence."
    );
  });

  it.only("Search bar test", async () => {
    //click on search
    await $("~Search").click();

    //verify search screen displayed

    await expect(
      await $("-ios predicate string:name == 'Search' AND label == 'Search'")
    ).toExist();

    //click on default
    await $(
      "-ios class chain:**/XCUIElementTypeStaticText[`name == 'Default'`]"
    ).click();

    await expect(
      await $(
        "-ios predicate string:name == 'Default Search Bar' AND label == 'Default Search Bar'"
      )
    ).toExist();

    //add value in search bar
    await $("//XCUIElementTypeSearchField").addValue("WDIO");

    //assertion
    await $("//XCUIElementTypeSearchField").toHaveAttr("value");

    //clear text
    await $("~Clear text").click();

    await expect(await $("//XCUIElementTypeSearchField")).not.toHaveAttr(
      "value"
    );
  });
});
