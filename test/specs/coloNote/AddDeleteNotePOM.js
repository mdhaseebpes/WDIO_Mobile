import AddNoteScreen from "/Users/mohammedhaseeb/Desktop/WebDriverIO/WDIO_Mobile/test/screenobjects/android/addNoteScreen.js";
import DeletNoteScreen from "/Users/mohammedhaseeb/Desktop/WebDriverIO/WDIO_Mobile/test/screenobjects/android/deleteNoteScreen.js";
import { $, $$, expect, driver } from "@wdio/globals";

describe("ColorNote Application Tests", () => {
  let noteScreen;
  let deleteNoteScreen;

  before(async () => {
    // Initialize page object after browser is ready
    noteScreen = new AddNoteScreen();
    deleteNoteScreen = new DeletNoteScreen();
  });

  it("should skip tutorial and verify home screen", async () => {
    await noteScreen.skipTutorial();
    await expect(noteScreen.addNoteTitle).toBeDisplayed();
  });

  it("should create a new text note", async () => {
    const testNote = {
      title: "Test Note",
      content: "WebDriverIO Automation",
    };

    await noteScreen.createTextNote(testNote.title, testNote.content);

    await expect(noteScreen.editIcon).toBeDisplayed();
    await expect(noteScreen.noteContent).toHaveText(testNote.content);
  });

  it("should delete the created note and verify", async () => {
    //navigating to More option
    deleteNoteScreen.moreOption.click();

    //click on delete option
    deleteNoteScreen.deleteBtn.click();

    //verify delete pop up appears and click ok
    await expect(deleteNoteScreen.deleteBtn).toBeDisplayed();
    deleteNoteScreen.textOk.click();

    //add note displayed
    await expect(noteScreen.addNoteTitle).toBeDisplayed();

    //click on menu option
    deleteNoteScreen.menuOption.click();

    deleteNoteScreen.trashCanElement.click();

    //Delete content is displayed
    await expect(deleteNoteScreen.deleteText).toHaveText("Test Note");
  });
});
