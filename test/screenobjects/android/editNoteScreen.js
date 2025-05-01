const { default: AddNoteScreen } = require("./addNoteScreen");

class EditNoteScreen {
  async skipTutorial() {
    await AddNoteScreen.skipTutorial();
    await expect(AddNoteScreen.addNoteTitle).toBeDisplayed();
  }

  async addAndSaveNote(noteHeading, noteBody) {
    const testNote = {
      title: noteHeading,
      content: noteBody,
    };

    await AddNoteScreen.createTextNote(testNote.title, testNote.content);

    await expect(AddNoteScreen.editIcon).toBeDisplayed();
    await expect(AddNoteScreen.noteContent).toHaveText(testNote.content);
  }
}

export default new EditNoteScreen();
