/// <reference types="cypress" />

Cypress.Commands.overwrite('visit', (originalFn, path, options) => {
  // workaround for Cypress defect, more info // https://github.com/cypress-io/cypress/issues/16192
  originalFn(path, {
    onBeforeLoad(win) {
      // @ts-expect-error
      delete win.navigator.__proto__.serviceWorker;
    },
    ...options
  })
})

Cypress.Commands.add("login", (userName, password) => {
  cy.session([userName, password], () => {

    cy.visit('/')
    cy.get('[data-test="username"]').type(userName);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory.html')
  },
    {
      validate() {
        cy.visit('/?/cart.html')
      },
    }
  )
});

// ***********************************************
// This example commands.ts shows you how to
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
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
