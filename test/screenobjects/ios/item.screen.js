class ItemScreen {
  get createItemLink() {
    return $(
      "-ios class chain:**/XCUIElementTypeStaticText[`name == 'Create item'`]"
    );
  }

  get itemTitle() {
    return $("-ios predicate string:value == 'Title'");
  }

  get dueField() {
    return $("//XCUIElementTypeTextField[@value='Due']");
  }

  get addToDoBtn() {
    return $("//XCUIElementTypeStaticText[@name='Add To Do']");
  }

  namefield(name) {
    return $(`~${name}`);
  }
}

export default new ItemScreen();
