/// <reference types="cypress" />

context('Network Requests', () => {
    beforeEach(() => {
        cy.log ('Excecuting before each')

    })
  
    // Manage HTTP requests in your app
  
    it('cy.request() - make an XHR request', () => {
        cy.log(' first it block')
        var recordkey = Cypress.env().RECORD_KEY
        var user = Cypress.env().se_login
        //  var pass = Cypress.env('SE_CYPRESS_PASSWORD')
        //  var acaCookie = Cypress.env('SE_IMP_ACA_COOKIE')
        expect (user).to.be.eqls('Anubala')
         //expect(recordkey).to.have.string('AAA')
        //  if ( recordkey !== 'AAA111'){
        //     expect(true).to.be.eql(false);
        //  }
        //  if (user !== 'anubala'){
        //      expect(true).to.be.eql(false);
        //  }
        // cy.log(recordkey)
        // cy.log(user)
        // cy.log(pass)
        // cy.log( acaCookie)
    })
 
    
  })
  