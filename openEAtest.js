const playwright = require("playwright");

(async () => {
  //Code execution happens within here
  const browser = await playwright["chromium"].launch();

  //context
  const context = await browser.newContext();

  //page
  const page = await context.newPage();

  //navigate to the page
  await page.goto("https://demosite.executeautomation.com/Login.html");
})();
