import { $, $$, expect, driver } from "@wdio/globals";

describe("Color note ", () => {
  it("Add and delete note", async () => {
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

    //Add a note
    const addElement = await $(
      '//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]'
    );
    await addElement.addValue("WebDriver IO master");

    //save the changes
    await driver.back();
    await driver.back();

    await expect(titleEdit).toHaveText("WebDriver IO master");
  });
});
