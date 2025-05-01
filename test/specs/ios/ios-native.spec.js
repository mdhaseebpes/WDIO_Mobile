describe("iOS native features", () => {
  it("Alert box", async () => {
    await $("~Alert Views").click();
    await $("~Okay / Cancel").click();

    //click ok
    //await $('~Ok').click();

    console.log(await driver.getAlertText());

    //await driver.dismissAlert();
    await driver.acceptAlert();

    //assertion
    await expect($("~OK")).not.toExist();
  });
});
