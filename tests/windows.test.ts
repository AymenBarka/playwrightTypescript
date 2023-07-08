import { expect, Page, test } from "@playwright/test";

test("Interact with  tabs", async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");
     console.log(page.url());
     const [newWindow] = await Promise.all([
        page.waitForEvent("popup"),
         page.click("'Follow On Twitter'")
     ]);
     await page.waitForTimeout(6000)

     console.log(newWindow.url());
         // newWindow.fill("", "")

})
test.only("Interact with multiple tabs", async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");

    const [multiPage] = await Promise.all([
        page.waitForEvent("popup"),
         page.click("#followboth")
     ]);
     await page.waitForLoadState();

    const pages= multiPage.context().pages()
    console.log("No.Of Tabs:  " + pages.length);
    pages.forEach(tab=>{
        console.log(tab.url());
    })

    let facebookPage;
    for (let index = 0; index < pages.length; index++) {
        const url = pages[index].url();
        if (url == "https://www.facebook.com/lambdatest/") {
            facebookPage = pages[index];
        }
    }
    const text = await facebookPage.textContent("//h1")
    console.log(text);

})