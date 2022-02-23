/// <reference types="cypress" />

context('Cypress.Commands', () => {
    beforeEach(() => {
      cy.log('running before each from test 1')
    })
  
    // https://on.cypress.io/custom-commands
  
    it('.add() - create a custom command', () => {
        cy.log(Cypress.config().baseUrl)
        cy.visit(Cypress.config().baseUrl)

      })

  })

  