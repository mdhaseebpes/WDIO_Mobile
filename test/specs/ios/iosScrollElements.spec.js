import { $, $$, expect, driver } from "@wdio/globals";

describe("ios scroll ", () => {
  it("Working with scrollable elements", async () => {
    await driver.execute("mobile:scroll", { direction: "down" });
    await driver.execute("mobile:scroll", { direction: "up" });
  });

  it("Scrollable test", async () => {
    await $("~Picker View").click();

    const redPicker = await $("~Red color component value");
    const bluePicker = await $("~Blue color component value");

    await driver.execute("mobile:scroll", {
      element: redPicker.elementId,
      direction: "down",
    });
    await driver.execute("mobile:scroll", {
      element: bluePicker.elementId,
      direction: "up",
    });

    await driver.pause(2000);
  });

  it.only("picker add value", async () => {
    await $("~Picker View").click();

    const redPicker = await $("~Red color component value");
    const greenPicker = await $("~Green color component value");
    const bluePicker = await $("~Blue color component value");

    //set purple color (125,0, 125)
    await redPicker.addValue("125");
    await greenPicker.addValue("0");
    await bluePicker.addValue("125");

    await driver.pause(2000);
  });
});
