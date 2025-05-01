const ListScreen = require("../../screenobjects/ios/list.screen.js").default;

describe("To do ", () => {
  it("Create list", async () => {
    await ListScreen.createListBtn.click();
    await ListScreen.listNameInput.addValue("Things to do success");

    await ListScreen.createBtn.click();
    await expect(
      await ListScreen.listNamefield("~Things to do success")
    ).toBeExisting();
  });
});
