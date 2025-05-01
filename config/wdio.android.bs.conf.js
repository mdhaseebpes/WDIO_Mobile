require("dotenv").config();
import path from "path";

import { config as sharedConfig } from "./wdio.shared.conf.js";

export const config = {
  ...sharedConfig,
  //
  // ============
  // BrowserStack Credentials
  // ============
  user: process.env.BROWSERSTACK_USER,
  key: process.env.BROWSERSTACK_KEY,

  //
  // ============
  // Specs
  // ============
  specs: [
    path.join(process.cwd(), "./test/specs/android/android-native.spec.js"),
  ],

  //
  // ============
  // Capabilities
  // ============
  capabilities: [
    {
      platformName: "Android",
      "appium:platformVersion": "12.0",
      "appium:deviceName": "Google Pixel 3",
      "appium:automationName": "UIAutomator2",
      "appium:app": "bs://cd209a98beb9c4bb48cfadf74d84c99092ec639c",
      "appium:autoGrantPermissions": true,
    },
  ],

  //
  // Test runner services
  // Services take over a specific job you don't want to take care of. They enhance
  // your test setup with almost no effort. Unlike plugins, they don't add new
  // commands. Instead, they hook themselves up into the test process.
  services: ["browserstack"],
};
