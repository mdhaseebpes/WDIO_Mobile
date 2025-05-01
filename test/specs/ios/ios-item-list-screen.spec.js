import ListScreen from "../../screenobjects/ios/list.screen.js";
import ItemScreen from "../../screenobjects/ios/item.screen.js";
import { expect, driver } from "@wdio/globals";

describe("Todo Item", () => {
  before(async () => {
    //Create ToDO List
    await ListScreen.createListBtn.click();
    await ListScreen.listNameInput.addValue("Things to do success");

    await ListScreen.createBtn.click();
    await expect(
      await ListScreen.listNamefield("Things to do success")
    ).toBeExisting();
    await ListScreen.listNamefield("Things to do success").click();
    await ItemScreen.createItemLink.click();
  });

  beforeEach(async () => {
    console.log("BEFORE EACH HOOK --- !");
  });

  after(async () => {
    console.log("AFTER HOOK --- !");
  });

  afterEach(async () => {
    console.log("AFTER EACH HOOK -----!");
  });

  it("Create a Todo item", async () => {
    // Create Todo Items
    await ItemScreen.itemTitle.addValue("Complete WDIO course");

    await ItemScreen.dueField.click();

    await ListScreen.listNamefield("20").click();

    await ItemScreen.addToDoBtn.click();

    await ListScreen.createBtn.click();

    //assertion
    await expect(
      ListScreen.listNamefield("Complete WDIO course")
    ).toBeExisting();
    await expect(ListScreen.listNamefield("Due Tomorrow")).toBeExisting();

    await driver.pause(2000);
  });

  it("Edit To do list", async () => {
    // Edit Todo Items
  });

  it("Delete To do list", async () => {
    // Edit Todo Items
  });
});
