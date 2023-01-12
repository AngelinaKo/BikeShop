/// <reference types="cypress" />

const cartIcon = () => {
  return cy.get('#shopping_cart_container .shopping_cart_link');
};

Cypress.Commands.overwrite('visit', (originalFn, path, options) => {
  // workaround for Cypress defect, more info // https://github.com/cypress-io/cypress/issues/16192
  originalFn(path, {
    onBeforeLoad(win) {
      // @ts-expect-error
      delete win.navigator.__proto__.serviceWorker;
    },
    ...options
  })
});

Cypress.Commands.add("login", (userName, password) => {
  cy.session([userName, password], () => {
    cy.visit('/');
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

Cypress.Commands.add("addProductToCart", (product) => {
  cy.get(`#add-to-cart-${product}`)
    .contains("Add to cart")
    .click();
});

Cypress.Commands.add("checkIfCartIconShowsNumberOfItems", (number) => {
  cartIcon()
  .contains(number);
});

Cypress.Commands.add("navigateToCart", () => {
  cartIcon()
  .click();
});

Cypress.Commands.add("checkIfItemNameIsVisibleInTheCart", (productName) => {
  cy.contains(productName)
  .should('be.visible');
});

Cypress.Commands.add("navigateToCheckout", () => {
  cy.get('#checkout')
  .click();
});

Cypress.Commands.add("insertUsersData", (firstName, lastName, postalCode) => {
   cy.get('#first-name')
   .type(firstName);
   cy.get('#last-name')
   .type(lastName);
   cy.get('#postal-code')
   .type(postalCode);
   cy.get('#continue')
   .click();
});

Cypress.Commands.add("checkProductInOwerview", (product) => {
  cy.get('.cart_item')
  .contains(product)
  .scrollIntoView()
  .should('be.visible');
});

Cypress.Commands.add("finishCheckout", () => {
  cy.contains("Finish").click();
});

Cypress.Commands.add("checkIfItemPurchasedSuccessfully", () => {
  cy.contains("THANK YOU FOR YOUR ORDER")
  .scrollIntoView()
  .should('be.visible');
});
