export default class DeletNoteScreen {
  get moreOption() {
    //navigating to More option
    return $("~More");
  }

  get deleteBtn() {
    //click on delete option
    return $('//*[@text="Delete"]');
  }

  get textOk() {
    return $('//*[@text="OK"]');
  }

  get menuOption() {
    //click on menu option
    return $(
      '//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]'
    );
  }

  get trashCanElement() {
    return $('//*[@text="Trash Can"]');
  }

  get deleteText() {
    //Delete content is displayed
    return $('//*[@text="Test Note"]');
  }
}
