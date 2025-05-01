import { $, $$, expect, driver } from "@wdio/globals";

describe("Add and delete a note", () => {
  it("test", async () => {
    //skip tutorial
    await $(
      '//android.widget.Button[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]'
    ).click();

    await expect($('//*[@text="Add note"]')).toBeDisplayed();

    //Add note
    await $(
      '//android.widget.ImageView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/img_add"]'
    ).click();

    //click on text
    await $(
      '//android.widget.ListView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/select_dialog_listview"]/android.widget.LinearLayout[1]'
    ).click();

    //click on edit text
    const titleEdit = await $("android.widget.EditText");
    await titleEdit.click();
    await titleEdit.addValue("Test");

    //Add a note
    const addElement = await $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]'
    );
    await addElement.click();
    await addElement.addValue("WebDriver IO master");

    //save the changes
    await driver.back();
    await driver.back();

    //verify the content
    await expect(
      $(
        '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]'
      )
    ).toHaveText("WebDriver IO master");

    //verify edit icon
    await expect(
      $(
        '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]'
      )
    ).toBeDisplayed();

    //navigating to More option
    await $("~More").click();

    //click on delete option
    await $('//*[@text="Delete"]').click();

    //verify delete pop up appears and click ok
    await expect($('//*[@text="Delete"]')).toBeDisplayed();
    await $('//*[@text="OK"]').click();

    //add note displayed
    await expect($('//*[@text="Add note"]')).toBeDisplayed();

    //click on menu option
    await $(
      '//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]'
    ).click();

    await $('//*[@text="Trash Can"]').click();

    //Delete content is displayed
    await expect($('//*[@text="Test"]')).toBeDisplayed();
  });
});
