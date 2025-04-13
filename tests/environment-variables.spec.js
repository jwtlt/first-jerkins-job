// import { test } from '@playwright/test';
import { test } from '@playwright/test';

// create a test case
test('@env-test Environment Variables', async ({ page }) => {
    console.log(`Username is: ${process.env.PRACTICE_USERNAME}`);
    console.log(`Password is: ${process.env.PRACTICE_PASSWORD}`);
});

test("Bypass authentication by encoding the credentials base64 format", async ({page}) => {
  let encodedCredential = Buffer.from(`${process.env.PRACTICE_USERNAME}:${process.env.PRACTICE_PASSWORD}`).toString("base64");

  await page.setExtraHTTPHeaders({Authorization: `Basic ${encodedCredential}`});

  await page.goto("https://practice.cydeo.com/basic_auth");

  await page.waitForTimeout(1000);
});