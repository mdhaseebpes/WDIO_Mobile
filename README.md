# WebDriverIO Mobile Automation Framework

This repository contains a comprehensive mobile automation framework built with **WebDriverIO (v8)** and **Appium 2.0**, designed for both **Android** and **iOS** platforms using **TypeScript**.

---

## 📱 Supported Platforms

- ✅ Android (Real devices and Emulators)
- ✅ iOS (Simulators and Real devices)

---

## 🧰 Tech Stack

| Component         | Technology               |
| ----------------- | ------------------------ |
| Language          | TypeScript               |
| Test Runner       | WebDriverIO v8           |
| Automation Engine | Appium 2.0               |
| Assertion Library | Chai                     |
| Test Framework    | Mocha                    |
| Report            | Allure Reporter          |
| CI/CD             | Jenkins / GitHub Actions |
| Device Cloud      | Sauce Labs / Local       |

---

## 📦 Project Structure

```
├── config/
│   └── wdio.android.config.ts
│   └── wdio.ios.config.ts
├── test/
│   ├── specs/
│   └── pageobjects/
├── utils/
├── reports/
├── .env
├── package.json
├── tsconfig.json
├── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/mobile-wdio-automation.git
cd mobile-wdio-automation
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Install Appium 2.0 Globally

```bash
npm install -g appium
appium driver install uiautomator2
appium driver install xcuitest
```

### 4. Create Environment File

Create a `.env` file in the root with the following variables:

```env
PLATFORM=android
DEVICE_NAME=emulator-5554
PLATFORM_VERSION=12
APP=./apps/MyApp.apk
```

### 5. Start Appium Server

```bash
appium
```

### 6. Execute Tests

#### For Android:

```bash
npx wdio config/wdio.android.config.ts
```

#### For iOS:

```bash
npx wdio config/wdio.ios.config.ts
```

---

## 🧪 Sample Test Structure

```typescript
describe("Login Test", () => {
  it("should login successfully", async () => {
    await LoginPage.enterUsername("testuser");
    await LoginPage.enterPassword("testpass");
    await LoginPage.tapLogin();
    await expect(HomePage.title).toBeDisplayed();
  });
});
```

---


## 📘 Resources

- [WebDriverIO Docs](https://webdriver.io/)
- [Appium 2.0 Docs](https://appium.io/docs/en/2.0/)
- [Allure Report](https://docs.qameta.io/allure/)
