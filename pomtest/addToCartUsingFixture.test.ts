import { expect, test } from "../base/pomFixture";
import * as data from "../test-data/addTocart-test-data.json"

// test.use({
//     browserName: "firefox"
// })

test.describe("Suite page object test ",async()=>{


test("Register test_01", async ({ page, baseURL ,registerPage}, testInfo) => {
    console.log('TITLE: ' + testInfo.title);

    //const register = new RegisterPage(page);
    await page.goto(`${baseURL}route=account/register`);
    await registerPage.enterFirstName(data.fistname);
    await registerPage.enterLastName(data.lastname)
    await registerPage.enterEmail(data.email);
    await registerPage.enterTelephone(data.phone_number)
    await registerPage.enterPassword(data.password);
    await registerPage.enterConfirmPassword(data.password);
    expect(registerPage.isSubscribeChecked()).toBeChecked();
    await registerPage.clickTermandConditon();
    await registerPage.clickContinueToRegister();
    console.log('STATUS: ' + testInfo.status);


})
test("Login test_02", async ({ page, baseURL,loginPage },testInfo) => {
    console.log('TITLE: ' + testInfo.title)
   // const login = new LoginPage(page);
    await page.goto(`${baseURL}route=account/login`)
    await loginPage.enterEmail(data.email);
    await loginPage.enterLoginPassword(data.password);
    await loginPage.clickLoginBtn();
    expect(await page.title()).toBe("My Account");
    console.log('STATUS: ' + testInfo.status);

})
test.only("Add to cart test_03", async ({ page, baseURL,loginPage,homePage,specialPage }) => {
  //  const login = new LoginPage(page);
   // const homePage = new HomePage(page);
  //  const special = new SpecialHotPage(page);
    await page.goto(`${baseURL}route=account/login`)
    await loginPage.login(data.email, data.password);
    await homePage.clickOnSpecialHotMenu();
    await specialPage.addFirstProductToTheCart();
    const isCartVisible = await specialPage.isToastVisible();
    expect(isCartVisible).toBeVisible();
})

})