const dotenv = require('dotenv')
dotenv.config();

const ENV = process.env.TEST_ENV || 'test'
const PROJ = process.env.TEST_PROJ || 'project1'
const specPattern = `cypress/e2e/${PROJ}/**/*.cy.{js,jsx,ts,tsx}`
console.info(`Tests run on '${ENV}' for project as '${PROJ}'`)
console.log(`specPattern = ${specPattern}`)

const envConfig = require(`./env/${PROJ}/${ENV}`)
console.info(`${specPattern}`)

const { defineConfig } = require('cypress')
module.exports = defineConfig({
  defaultCommandTimeout: 5000,
  env: envConfig,
  e2e: {
    redirectionLimit: 200,
    viewportWidth: 1500,
    viewportHeight: 1200,
    specPattern: specPattern,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
