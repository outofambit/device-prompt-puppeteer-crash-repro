# Device Prompt Puppeteer Error

## How to

```session
$ npm install
$ npm run script
```

## Produces Error

This is expected to produce the following error output in the console.

```shell
/Users/user-name/src/bluetooth-puppeteer/node_modules/puppeteer-core/src/util/assert.ts:29
    throw new Error(message);
          ^
Error
    at assert (/Users/user-name/src/bluetooth-puppeteer/node_modules/puppeteer-core/src/util/assert.ts:29:11)
    at CdpFrame.#deviceRequestPromptManager (/Users/user-name/src/bluetooth-puppeteer/node_modules/puppeteer-core/src/cdp/Frame.ts:299:11)
    at CdpFrame.waitForDevicePrompt (/Users/user-name/src/bluetooth-puppeteer/node_modules/puppeteer-core/src/cdp/Frame.ts:307:50)
    at CdpFrame.<anonymous> (/Users/user-name/src/bluetooth-puppeteer/node_modules/puppeteer-core/src/util/decorators.ts:71:21)
    at CdpPage.waitForDevicePrompt (/Users/user-name/src/bluetooth-puppeteer/node_modules/puppeteer-core/src/cdp/Page.ts:1215:35)
    at run (/Users/user-name/src/bluetooth-puppeteer/index.ts:9:14)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
```
