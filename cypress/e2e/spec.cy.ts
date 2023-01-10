describe("Test purchise flow", () => {

  beforeEach(() => {
    cy.login('standard_user', 'secret_sauce')
  })


  it("Should add product to cart", () => {
    cy.visit('?/inventory.html')
    cy.contains('Sauce Labs Backpack');
    cy.get('#add-to-cart-sauce-labs-backpack').contains("Add to cart").click();

    const cartIcon = cy.get('#shopping_cart_container .shopping_cart_link');
    cartIcon.contains('1')
    cartIcon.click()
    cy.contains('Sauce Labs Backpack').should('be.visible');
  });

  it("Should proceed to checkout", () => {
    cy.visit('/?/cart.html')
    cy.get('#checkout').click();
    cy.get('#first-name').type('John');
    cy.get('#last-name').type('Doe');
    cy.get('#postal-code').type('00-001');
    cy.get('#continue').click();
  })
});
