// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// declare global {
//   // eslint-disable-next-line @typescript-eslint/no-namespace

//   namespace Cypress {
//     interface Chainable<Subject> {
//       google(): Chainable<Window>
//       test(fileName: string): void
//       Accessibility(fileName: string): void
//     }
//   }
// }

// Cypress.Commands.add('google', () => cy.log('hello'))

// Cypress.Commands.add('Accessibility', (fileName) => {
//   function terminalLog(violations) {
//     const violationData = violations.map(
//       ({ id, impact, tags, description, help, helpurl, nodes }) => ({
//         id,
//         impact,
//         tags,
//         description,
//         help,
//         helpurl,
//         length: nodes.length,
//         nodes
//       })
//     )
//     cy.writeFile('cypress/fixtures/' + fileName, violationData)
//   }
//   cy.injectAxe()
//   cy.checkA11y(null, null, terminalLog, true)
// })

// export {}
