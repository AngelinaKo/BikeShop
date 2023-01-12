import buyer from '../fixtures/buyer.json'
const userLogin = Cypress.env('STANDART_USER').username
const userPassword = Cypress.env('STANDART_USER').password
const backpack = "sauce-labs-backpack"
const backpackName = "Sauce Labs Backpack"

describe("Test purchase flow", () => {

  beforeEach(() => {
    cy.login(userLogin, userPassword);
  });


  it("Should buy a backpack", () => {
    cy.visit('?/inventory.html');
    cy.addProductToCart(backpack);

    cy.checkIfCartIconShowsNumberOfItems(1);

    cy.navigateToCart();

    cy.checkIfItemNameIsVisibleInTheCart(backpackName)

    cy.navigateToCheckout();

    cy.insertUsersData(buyer.firstName, buyer.lastName, buyer.postalCode);

    cy.checkProductInOwerview(backpackName);

    cy.finishCheckout();

    cy.checkIfItemPurchasedSuccessfully();
    
  });
});
