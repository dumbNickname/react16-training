describe('Hello world', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should properly initialize', () => {
    cy.get('.hello').should('have.text', 'Hello World');
    cy.get('input').should('have.value', 'World');
  });

  it('should properly update values on input', () => {
    cy.get('input')
      .clear()
      .type('Bartek')
      .should('have.value', 'Bartek');;

    cy.get('.hello').should('have.text', 'Hello Bartek');
  });
});
