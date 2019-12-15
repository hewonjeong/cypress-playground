/// <reference types="Cypress" />

describe('Default', () => {
  it('Signin to SendBird Dashboard', () => {
    cy.visit(Cypress.env('URL'))

    cy.get('#email').type(Cypress.env('EMAIL'))
    cy.get('#password').type(Cypress.env('PASSWORD'))
    cy.get('#id_button_submit').click()

    cy.get('tbody tr').should('have.length.greaterThan', 1)
  })
})
