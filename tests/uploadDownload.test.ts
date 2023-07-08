import {test} from '@playwright/test'

test("Download files",async ({page})=> {

    await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo")
    await page.type("#textbox", "Like, Share, comment & subs");
    await page.click("id=create")
    const download= await Promise.all([
        page.waitForEvent("download"),
        page.click("id=link-to-download")
    ])
    //const path = await download[0].path();
    //console.log(path);
    const fileName = await download[0].suggestedFilename();
    await download[0].saveAs(fileName);
})

test.only("upload files",async ({page})=> {

    await page.goto("https://blueimp.github.io/jQuery-File-Upload/")

   // await page.setInputFiles("input[type='file']",["upload/nature.png","upload/life.png"]);
     //await page.waitForTimeout(5000)
     const [uploadFiles]= await Promise.all([
        page.waitForEvent("filechooser"),
        page.click("input[type='file']")
     ])
     const isMultiple = uploadFiles.isMultiple();
     console.log(isMultiple);
     uploadFiles.setFiles(["upload/nature.png","upload/life.png"]);
})
