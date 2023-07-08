import {chromium, test} from "@playwright/test";

test("login test demo", async ()=>
{
     const browser=   await chromium.launch();
     const context= await browser.newContext();
     const page= await context.newPage();
     
     await page.goto('/');
     await page.hover("//a[@role='button']//span[@class='title'][normalize-space()='My account']");
     await page.click("//span[normalize-space()='Login']");

     await page.fill("//input[@id='input-email']","aymenbarka@yahoo.fr");
     await page.fill("//input[@id='input-password']","Pass123");
     await page.click("//input[@value='Login']");
     
     await page.close();
     await context.close();
     await browser.close();

})
