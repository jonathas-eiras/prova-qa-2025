const { defineConfig } = require("cypress");
require('dotenv').config();
const allureWriter = require('@shelex/cypress-allure-plugin/writer');


module.exports = defineConfig({
  e2e: {
    baseUrl: "https://api.trello.com/1/",
    env: {
      API_KEY: process.env.API_KEY,
      TOKEN: process.env.TOKEN
    },
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    }
  },

});
