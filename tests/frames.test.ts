import { expect, test } from "@playwright/test";

test("Interact with frames", async ({ page }) => {

    await page.goto("https://letcode.in/frame");
    const allframes = page.frames();
    console.log("No.of frames: " + allframes.length);
    
    const frame = page.frameLocator("#firstFr")
    await frame.locator("input[name='fname']").fill("aymen");
    await frame.locator("input[name='lname']").fill("barka");
    //expect(await frame?.locator("p.has-text-info").textContent()).toContain("You have entered")
    const innerFrame = frame.frameLocator("iframe[src='innerFrame']")
    await innerFrame.locator("input[name='email']").fill("aymenbarka@yahoo.fr")

    await frame.locator("input[name='fname']").fill("letcode");

})