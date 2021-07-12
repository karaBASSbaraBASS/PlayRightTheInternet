const { setHeadlessWhen } = require("@codeceptjs/configure");

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: "./Features/UI/*_test.js",
  output: "./output",
  helpers: {
    Playwright: {
      url: "https://the-internet.herokuapp.com/",
      show: true,
      browser: "chromium",
    },
  },
  include: {
    I: "./UISteps/steps_file.js",
  },
  bootstrap: null,
  mocha: {},
  name: "codeceptInternet",
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true,
    },
    tryTo: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
};
