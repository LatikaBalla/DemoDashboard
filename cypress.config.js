const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
module.exports = defineConfig({
  projectId: 'qt2s1p',
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
            return config;
      // implement node event listeners here
    },
  },
});
