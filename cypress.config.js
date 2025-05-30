const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://api.trello.com/1/",
    env: {
      API_KEY: process.env.API_KEY,
      TOKEN: process.env.TOKEN
    },
    setupNodeEvents(on, config) {
    }
  },

  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
    overwrite: false,
    html: false,
    json: true
  }

});
