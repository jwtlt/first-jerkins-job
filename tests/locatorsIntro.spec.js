import { test } from "@playwright/test";

test("google test", async ({ page }) => {
    // navigate to http://www.google.com
    await page.goto("https://www.google.com");

    // wait for the page to load for three seconds
    await page.waitForTimeout(1000);

    let searchBox = page.locator("//textarea[@id='APjFqb']");

    await page.waitForTimeout(1000);

    //await searchBox.type("CYDEO");   types one by one
    await searchBox.fill("CYDEO");  // types at once

    await page.waitForTimeout(1000);

    await searchBox.press("Enter");

    await page.waitForTimeout(1000);
});

/*
<textarea class="gLFyf" aria-controls="Alh6id" 
aria-owns="Alh6id" autofocus="" title="Ara" value="" 
aria-label="Ara" placeholder="" aria-autocomplete="both" 
aria-expanded="false" aria-haspopup="false" 
autocapitalize="off" autocomplete="off" autocorrect="off" 
id="APjFqb" maxlength="2048" name="q" role="combobox" 
rows="1" spellcheck="false" jsaction="paste:puy29d" 
data-ved="0ahUKEwiUnd73rLaMAxWeRTABHc4BCgcQ39UDCA4" 
aria-activedescendant="" style=""></textarea>
*/

//textarea[@class='gLFyf']

// duplicate the test case above
test("CSS locator google test", async ({ page }) => {
    // navigate to http://www.google.com
    await page.goto("https://www.google.com");

    // wait for the page to load for three seconds
    await page.waitForTimeout(1000);

    let searchBox = page.locator("textarea#APjFqb");

    await page.waitForTimeout(1000);

    //await searchBox.type("CYDEO");   types one by one
    await searchBox.fill("CYDEO");  // types at once

    await page.waitForTimeout(1000);

    await searchBox.press("Enter");

    await page.waitForTimeout(1000);
});