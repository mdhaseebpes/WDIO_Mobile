class ListScreen {
  get createListBtn() {
    return $("//XCUIElementTypeStaticText[@name='Create list']");
  }

  get listNameInput() {
    return $("-ios predicate string:value == 'List Name'");
  }

  get createBtn() {
    return $("~Create");
  }

  listNamefield(name) {
    return $(`~${name}`);
  }
}

export default new ListScreen();
