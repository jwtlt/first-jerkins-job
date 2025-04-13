import { test } from "@playwright/test";

test("google test", async ({ page }) => {
    // navigate to http://www.google.com
    await page.goto("https://www.google.com");

    // wait for the page to load for three seconds
    await page.waitForTimeout(3000);
});

// duplicate the test above replace google with youtube
test("youtube test", async ({ page }) => {
    // navigate to http://www.youtube.com
    await page.goto("https://www.youtube.com");

    // wait for the page to load for three seconds
    await page.waitForTimeout(3000);
});

