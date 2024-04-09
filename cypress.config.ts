import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login'
  },
});
