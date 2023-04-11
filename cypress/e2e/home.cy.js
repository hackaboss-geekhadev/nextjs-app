describe('Home', () => {
  it('should get', () => {
    cy.visit('/')
    cy.get('a').contains('Servicios').click()
    cy.url().should('include', '/services')
  })
})
