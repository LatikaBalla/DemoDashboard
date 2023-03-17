const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'qt2s1p',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
