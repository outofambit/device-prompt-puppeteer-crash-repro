import puppeteer from "puppeteer";

const run = async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const mainPage = await browser.newPage();
  await mainPage.goto("http://google.com");
  await mainPage.waitForDevicePrompt();
};

run();
