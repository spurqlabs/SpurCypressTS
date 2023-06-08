import { defineConfig } from 'cypress'
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor'
import browserify from '@badeball/cypress-cucumber-preprocessor/browserify'

import allureWriter from '@shelex/cypress-allure-plugin/writer'
const {
  NodeModulesPolyfillPlugin,
} = require('@esbuild-plugins/node-modules-polyfill')

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions,
): Promise<Cypress.PluginConfigOptions> {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config)
  allureWriter(on, config),
    on(
      'file:preprocessor',
      browserify(config, {
        typescript: require.resolve('typescript'),
      }),
    )

  // Make sure to return the config object as it might have been modified by the plugin.
  return config
}
export default defineConfig({
  env: {
    api_URL: 'https://reqres.in/',
    screenshotsFolder: 'cypress/screenshots',
  },

  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.

    setupNodeEvents,

    excludeSpecPattern: ['*.js', '*.md', '*.ts'],
    specPattern: 'cypress/e2e/**/*.feature',
    baseUrl: 'https://www.calculator.net/',
  },
})
