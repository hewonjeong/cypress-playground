/// <reference types="Cypress" />

describe('My First Test', () => {
  it('Signin to SendBird Dashboard', () => {
    cy.visit(Cypress.env('URL'))

    cy.get('#email')
      .type(Cypress.env('EMAIL'))
      .get('#password')
      .type(Cypress.env('PASSWORD'))
      .get('#id_button_submit')
      .click()

    cy.get('tbody tr', { timeout: 10000 }).should('have.length.greaterThan', 1)
  })
})
