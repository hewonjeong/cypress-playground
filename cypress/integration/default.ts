describe('Default', () => {
  it('rnders applications when signin', () => {
    cy.login()
    cy.get('tbody tr.etQUDs').should('have.length.greaterThan', 1)
  })

  it('renders overview page when click application', () => {
    cy.login()

    cy.get('tbody tr.etQUDs td')
      .first()
      .click({ force: true })

    cy.url().should('include', '/overview')
  })
})
