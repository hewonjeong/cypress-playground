describe('Default', () => {
  it('Signin to SendBird Dashboard', () => {
    cy.login()
    cy.get('tbody tr').should('have.length.greaterThan', 1)
  })
})
