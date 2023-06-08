import { Before, After } from '@badeball/cypress-cucumber-preprocessor'

before(() => {
  cy.log("I'm in before")
})

after(() => {
  cy.log("I'm in after")
})

Before({ tags: '@tags' }, () => {
  cy.log("I'm in taged hook")
})
