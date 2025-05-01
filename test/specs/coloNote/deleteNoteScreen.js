import AddNoteScreen from "../../screenobjects/android/addNoteScreen.js";
import DeletNoteScreen from "/Users/mohammedhaseeb/Desktop/WebDriverIO/WDIO_Mobile/test/screenobjects/android/deleteNoteScreen.js";
const editNoteScreen = require("../../screenobjects/android/editNoteScreen.js");
import { $, $$, expect, driver } from "@wdio/globals";

describe("Delete Note", () => {
  let deleteNoteScreen;
  let addNoteScreen;

  before(async () => {
    // Initialize page object after browser is ready
    deleteNoteScreen = new DeletNoteScreen();
    addNoteScreen = new AddNoteScreen();
  });

  it("Delete a note and check the note in trash can", async () => {
    //Skip tutorial
    editNoteScreen.skipTutorial();

    // adding a note and saving it
    editNoteScreen.addAndSaveNote("Test Note", "Webdriver mobile automation");

    //navigating to More option
    deleteNoteScreen.moreOption.click();

    //click on delete option
    deleteNoteScreen.deleteBtn.click();

    //verify delete pop up appears and click ok
    await expect(deleteNoteScreen.deleteBtn).toBeDisplayed();
    deleteNoteScreen.textOk.click();

    //add note displayed
    await expect(addNoteScreen.addNoteTitle).toBeDisplayed();

    //click on menu option
    deleteNoteScreen.moreOption.click();

    deleteNoteScreen.trashCanElement.click();

    //Delete content is displayed
    await expect(deleteNoteScreen.deleteText("Test Note")).toBeDisplayed();
  });
});
