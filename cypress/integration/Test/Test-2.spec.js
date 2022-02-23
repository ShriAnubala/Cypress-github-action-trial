/// <reference types="cypress" />

context('Network Requests', () => {
    beforeEach(() => {
        cy.log ('Excecuting before each')

    })
  
    // Manage HTTP requests in your app
  
    it('cy.request() - make an XHR request', () => {
        cy.log(' first it block')
         var user = Cypress.env('SE_CYPRESS_LOGIN')
         var pass = Cypress.env('SE_CYPRESS_PASSWORD')
         var acaCookie = Cypress.env('SE_IMP_ACA_COOKIE')
        //  if (user !== 'Anubala'){
        //      cy.log('This is my name');
        //  }
        cy.log(user)
        cy.log(pass)
        cy.log( acaCookie)
    })
 
    
  })
  