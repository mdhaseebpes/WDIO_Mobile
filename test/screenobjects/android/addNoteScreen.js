export default class AddNoteScreen {
  // Page elements
  get skipBtn() {
    return $(
      "id=com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"
    );
  }

  get addNoteTitle() {
    return $('//*[@text="Add note"]');
  }

  get addNoteBtn() {
    return $("id=com.socialnmobile.dictapps.notepad.color.note:id/img_add");
  }

  get textOption() {
    return $('//*[@text="Text"]');
  }

  get editTitle() {
    return $("android.widget.EditText");
  }

  get noteContentField() {
    return $("id=com.socialnmobile.dictapps.notepad.color.note:id/edit_note");
  }

  get editIcon() {
    return $("id=com.socialnmobile.dictapps.notepad.color.note:id/edit_btn");
  }

  get noteContent() {
    return $("id=com.socialnmobile.dictapps.notepad.color.note:id/view_note");
  }

  // Page actions
  async skipTutorial() {
    await this.skipBtn.click();
  }

  async createTextNote(title, content) {
    await this.addNoteBtn.click();
    await this.textOption.click();
    await this.editTitle.setValue(title);
    await this.noteContentField.setValue(content);
    await this.saveChanges();
  }

  async saveChanges() {
    await browser.back();
    await browser.back();
  }
}
