declare namespace Cypress {
    interface Chainable<Subject> {
        typeAText(field: any, text: any): Chainable<any>
        clickElement(element: any): Chainable<any>
  }
}