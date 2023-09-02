/* eslint-disable no-undef */
describe('make sure all the checkboxes work and they show the correct data',  { keystrokeDelay: 100 }, () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('uncheck all the boxes beside explicit and find the correct results',  () => {
    cy.get('#1900s').uncheck();
    cy.get('#2000s').uncheck();

    // cy.get('.search__form input').type('blink 182')

    // cy.get('#1900s').check();
    // cy.get('.album__name').contains('Buddha');
    // cy.get('#1900s').uncheck();

    // cy.get('#2000s').check();
    // cy.get('.album__name').contains('California');
    // cy.get('#2000s').uncheck();
    cy.checkBoxValue('#1900s', 'Buddha', 'blink 182');
    cy.checkBoxValue('#2000s', 'California', 'blink 182');
  })
})