/// <reference types="Cypress" />

describe('My First Test', () => {
  it('Signin to SendBird Dashboard', () => {
    const { BASE_URL, EMAIL, PASSWORD } = Cypress.env()
    cy.visit(BASE_URL)

    cy.get('#email')
      .type(EMAIL)
      .get('#password')
      .type(PASSWORD)
      .get('#id_button_submit')
      .click()

    cy.get('tbody tr', { timeout: 10000 }).should('have.length.greaterThan', 1)
  })
})
