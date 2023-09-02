/* eslint-disable no-undef */
describe(' Test all of our input features', { keystrokeDelay: 100 }, () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('I can type something in to the input and a result will show', () => {
    cy.get('.search__form input').type('Daft Punk');
    cy.get('.album__name').contains('Random Access Memories (10th Anniversary Edition)')
  });

  it('I can type something and also delete the results of what I am trying to type', () => {
    cy.get('.search__form input').type('Daftttttt{backspace}{backspace}{backspace}{backspace}{backspace} Punk');
  });

  it('After a user has typed something in I want to be able to clear my input feild', () => {
    cy.get('.search__form input').type('Daftttttt{backspace}{backspace}{backspace}{backspace}{backspace} Punk').clear().type('Sum 41');
    cy.get('.album__name').contains('Screaming Bloody Murder');
  });
});