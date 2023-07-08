import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  projects: [
     
      {
          name: "chrome:latest:MacOS Catalina",
          use: {
              viewport: { width: 1280, height: 720 },
              screenshot:"on",
              video:"on"
          },
        },
          {
            name: "chrome:latest:Windows 10@lambdatest",
            use: {
                viewport: { width: 1280, height: 720 },
            },
        },
        {
            name: "chrome",
            use: {
                ...devices["Desktop Chrome"]
            }
        },
        {
            name: "firefox",
            use: {
                ...devices["Desktop Firefox"]
            }
        }
      
      
     
  ],

  testMatch: ["pomtest/addToCartUsingFixture.test.ts"],
  use: {
      // connectOptions: {
      //     wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=
      //     ${encodeURIComponent(JSON.stringify(capabilities))}`
      // },
      baseURL: "https://ecommerce-playground.lambdatest.io/index.php?",
      headless: false,
      screenshot:'on',
      video:'on',
      
      launchOptions: {
           slowMo: 1000
      },
     
  },
  timeout: 60 * 1000 * 5,
  retries: 0,
  reporter: [["dot"], ["json", {
      outputFile: "jsonReports/jsonReport.json"
  }], ["html", {
      open: "never"
  }]]
};

export default config;