/* eslint-disable no-undef */
describe('Check all the checkbox features', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('I can uncheck the Explicit checkbox', () => {
    
    // $('#Explicit')
    cy.get('#Explicit').uncheck().should('not.be.checked')
  })

  it('I can check the single box', () => {
    // cy.visit('http://localhost:8002/')
    cy.get('#Single').check().should('be.checked')
  })
});

