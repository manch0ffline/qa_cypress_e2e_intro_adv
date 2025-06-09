const { defineConfig } = require('cypress');

export default defineConfig({
  e2e: {
    baseUrl: 'https://conduit.mate.academy',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
