const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost',
      show: true,
      browser: 'chromium',
      waitForNavigation: 'networkidle',
      waitForTimeout: 5000,
      windowSize: '1550x800',
    },
    ChaiWrapper: {
      require: "codeceptjs-chai"
    },
    Converter: {
      require: './helpers/converter_helper.js',
    },
    REST: {
      defaultHeaders: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    },
    JSONResponse: {},
  },
  include: {
    "I": "./steps_file.js",
    "homePage": "./pages/home.js",
    "registerPage": "./pages/register.js",
    "productPage": "./pages/product.js",
    "helper": "./helpers/helper.js",
  },
  name: 'js_stream3',
  "mocha": {
    "reporterOptions": {
        "reportDir": "output"
    }
  },
}