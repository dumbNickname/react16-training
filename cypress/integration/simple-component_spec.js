describe('Book details component', () => {
  const author = 'John Wick';
  const title = 'Revenge';
  
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should have two form groups with inputs', () => {
    cy.get('form')
      .find('.form-group')
      .should('have.length', 2)
      .within(() => {
        cy.get('label').should('have.length', 2)
        cy.get('input').should('have.length', 2)
      })
  });

  it('should have authors form group', () => {
    cy.get('form .form-group').first().find('label[for=authors]').should('have.text', 'Authors:');
    cy.get('form .form-group').first().find('input[id=authors]').should('have.value', '');
  });

  it('authors input should allow to enter characters', () => { 
    cy.get('form .form-group input[id=authors]')
      .type(author)  
      .should('have.value', author);
  });
  
  it('should have title form group', () => {
    cy.get('form .form-group').last().find('label[for=title]').should('have.text', 'Title:');
    cy.get('form .form-group').last().find('input[id=title]').should('have.value', '');
  });

  it('title input should allow to enter characters', () => {
    cy.get('form .form-group input[id=title]')
      .type(title)  
      .should('have.value', title);
  });

  describe('Preview helper area', () => {
    it('authors input "data binding" works', () => {
      cy.get('form .form-group input[id=authors]').type(author);
      cy.get('form').next().find('span').last().should('contain', author);
    });

    it('title input "data binding" works', () => {
      cy.get('form .form-group input[id=title]').type(title);
      cy.get('form').next().find('span').last().should('contain', title);
    });
  });
});
