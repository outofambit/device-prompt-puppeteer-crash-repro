import puppeteer from "puppeteer";

const run = async () => {
  const browser = await puppeteer.launch();
  const mainPage = await browser.newPage();
  await mainPage.goto("http://espruino.com/ide");
  const [devicePrompt] = await Promise.all([
    mainPage.waitForDevicePrompt(),
    mainPage.locator("#requestBluetoothDevice").click(),
  ]);
  console.log(devicePrompt.devices);
};

run();
