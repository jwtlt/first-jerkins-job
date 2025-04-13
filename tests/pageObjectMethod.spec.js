import {test} from "@playwright/test";

// create a new empty test function
test('getting the title of the page', async ({ page }) => {
    await page.goto('https://practice.cydeo.com');

    let title = await page.title();
    console.log(`The title of the page is: ${title}`);
});

// duplicate the test function above and change the title to the url
test('getting the url of the page', async ({ page }) => {
    await page.goto('https://practice.cydeo.com');

    let url = await page.url();
    console.log(`The URL of the page is: ${url}`);
});

// duplicate the test function above and change the title to the set size of the window
test('getting the size of the window', async ({ page }) => {
    await page.goto('https://practice.cydeo.com');

    // await page.setViewportSize({width: 1920, height: 1080});

    await page.waitForTimeout(3000);

    let size = await page.evaluate(() => {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        };
    });
    console.log(`The size of the window is: ${size.width}x${size.height}`);
});
