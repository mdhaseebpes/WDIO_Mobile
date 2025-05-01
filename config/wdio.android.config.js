import path from "path";

import { config as sharedConfig } from "./wdio.shared.conf.js";

export const config = {
  ...sharedConfig,
  // ====================
  // Runner Configuration
  // ====================

  // WebdriverIO supports running e2e tests as well as unit and component tests.
  runner: "local",
  port: 4723,

  // ==================
  // Specify Test Files
  // ==================
  // Define which test specs should run. The pattern is relative to the directory
  // of the configuration file being run.
  //
  // The specs are defined as an array of spec files (optionally using wildcards
  // that will be expanded). The test for each spec file will be run in a separate
  // worker process. In order to have a group of spec files run in the same worker
  // process simply enclose them in an array within the specs array.
  //
  // The path of the spec files will be resolved relative from the directory of
  // of the config file unless it's absolute.
  //
  specs: [
    // ToDo: define location for spec files here
    "/Users/mohammedhaseeb/Desktop/WebDriverIO/WDIO_Mobile/test/specs/android/android-native.spec.js",
  ],

  //
  // ============
  // Capabilities
  // ============
  // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
  // time. Depending on the number of capabilities, WebdriverIO launches several test
  // sessions. Within your capabilities you can overwrite the spec and exclude options in
  // order to group specific specs to a specific capability.
  //

  capabilities: [
    {
      // capabilities for local Appium web tests on an Android Emulator
      platformName: "Android",
      "appium:deviceName": "emulator-5556",
      "appium:platformVersion": "14.0",
      "appium:automationName": "UiAutomator2",
      "appium:app": path.join(
        process.cwd(),
        "app/Android/ColorNote_Notepad.apk"
      ),
      "appium:autoGrantPermissions": true,
      //"appium:app": path.join(process.cwd(), "app/Android/ApiDemos-debug.apk"),
    },
  ],

  // Test runner services
  // Services take over a specific job you don't want to take care of. They enhance
  // your test setup with almost no effort. Unlike plugins, they don't add new
  // commands. Instead, they hook themselves up into the test process.
  services: ["appium"],
};
