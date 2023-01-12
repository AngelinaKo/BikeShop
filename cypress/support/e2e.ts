import "./commands";

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      login(userName: string, password: string): Chainable<any>;
    }
  }
}

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      visit(path: string, options: Partial<VisitOptions>): Chainable<any>;
    }
  }
}

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      addProductToCart(product: string): Chainable<any>;
    }
  }
}

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      checkIfCartIconShowsNumberOfItems(number: number): Chainable<any>;
    }
  }
}

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      navigateToCart(): Chainable<any>;
    }
  }
}

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      checkIfItemNameIsVisibleInTheCart(productName: string): Chainable<any>;
    }
  }
}

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      navigateToCheckout(): Chainable<any>;
    }
  }
}

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      insertUsersData(
        firstName: string,
        lastName: string,
        postalCode: string
      ): Chainable<any>;
    }
  }
}

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      checkProductInOwerview(product: string): Chainable<any>;
    }
  }
}

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      finishCheckout(): Chainable<any>;
    }
  }
}

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      checkIfItemPurchasedSuccessfully(): Chainable<any>;
    }
  }
}
