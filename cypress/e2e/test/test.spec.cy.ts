import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

//A User should be able to Login, search for Inventory, add product to cart, checkout and Logout of the application
Given(/^I launch the app$/, () => {
  cy.visit('/', { failOnStatusCode: false })
});

When(/^I input username and password$/, () => {
  cy.fixture('selectors.json').then((sel) => {
    cy.typeAText(sel.usernameField, sel.userName);
    cy.typeAText(sel.passwordField, sel.password);
  });
});

When(/^I click on login in button$/, () => {
  cy.fixture('selectors.json').then((sel) => {
    cy.clickElement(sel.LoginBotton)
  })
});

Then(/^I should view inventory list successfully$/, () => {
  cy.fixture('selectors.json').then((sel) => {
    cy.contains("Swag Labs").should("be.visible")
  });
})

When(/^I click on name Z to A$/, () => {
  cy.fixture('selectors.json').then((sel) => {
    cy.wait(2000)
    cy.get(sel.filterField).select(sel.ztoa)
  })
});

When(/^I click on price High to low$/, () => {
  cy.fixture('selectors.json').then((sel) => {
    cy.get(sel.filterField).select(sel.highTolow)
    cy.wait(3000)
  })
});

// A user should be able to Add to cart successfully
When(/^I click on add to cart button$/, () => {
  cy.fixture('selectors.json').then((sel) => {
    cy.clickElement(sel.addToCartBotton)
  })
});

When(/^I click on shopping cart badge Icon$/, () => {
  cy.fixture('selectors.json').then((sel) => {
    cy.clickElement(sel.shoppingCartbadge)
  })
});

When(/^I click on remove button$/, () => {
  cy.fixture('selectors.json').then((sel) => {
    cy.clickElement(sel.removeBotton)
  })
});

When(/^I click on continue shopping button$/, () => {
  cy.fixture('selectors.json').then((sel) => {
    cy.clickElement(sel.contShoppingBotton)
  })
});

When(/^I click on Add to cart button$/, () => {
  cy.fixture('selectors.json').then((sel) => {
    cy.clickElement(sel.addToCartBotton)
  })
});

When(/^I click on cart Icon$/, () => {
  cy.fixture('selectors.json').then((sel) => {
    cy.clickElement(sel.shoppingCartbadge)
  })
});

// A user should be able to checkout successfully
When(/^I click on checkout button$/, () => {
  cy.fixture('selectors.json').then((sel) => {
    cy.clickElement(sel.checkOutBotton)
  })
});

When(/^I input First and Last name$/, () => {
  cy.fixture('selectors.json').then((sel) => {
    cy.typeAText(sel.firstNameField, sel.firstNameText)
    cy.typeAText(sel.lastNameField, sel.lastNameField)
  })
});

When(/^I input my zipcode$/, () => {
  cy.fixture('selectors.json').then((sel) => {
    cy.typeAText(sel.postalCodeField, sel.postalCode)
  })
});

When(/^I click on continue button$/, () => {
  cy.fixture('selectors.json').then((sel) => {
    cy.clickElement(sel.continueBotton)
  })
});

When(/^I click on Finish button$/, () => {
  cy.fixture('selectors.json').then((sel) => {
    cy.clickElement(sel.finishBotton)
  })
});

When(/^I click on Hamburger button$/, () => {
  cy.fixture('selectors.json').then((sel) => {
    cy.clickElement(sel.burgerMenuBotton)
  })
});

Then(/^I click on Logout button$/, () => {
  cy.fixture('selectors.json').then((sel) => {
    cy.clickElement(sel.logOutBotton)
  })
});