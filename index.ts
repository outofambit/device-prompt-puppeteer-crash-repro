import puppeteer from "puppeteer";

const run = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    devtools: true,
    slowMo: 500,
    debuggingPort: 9222,
  });

  const mainPage = await browser.newPage();
  mainPage.on("console", (msg) => console.log("PAGE LOG:", msg.text()));
  await mainPage.goto(
    "http://googlechrome.github.io/samples/web-bluetooth/get-devices-async-await.html"
  );
  await mainPage.waitForNetworkIdle();
  const [devicePrompt] = await Promise.all([
    mainPage.waitForDevicePrompt(),
    mainPage.locator("#requestBluetoothDevice").click(),
  ]);

  console.log(devicePrompt.devices);
};

run();
