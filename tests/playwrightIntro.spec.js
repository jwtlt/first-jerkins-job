//const{test} = require("@playwright/test");

import {test} from "@playwright/test";

test("google test", async ({page}) => {
    // test codes

    await page.goto("https://google.com");

    await page.waitForTimeout(3000);
});