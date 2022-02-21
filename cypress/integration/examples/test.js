/// <reference types="cypress" />

describe('Aliasing', () => {
   
  
    it('test1234', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click()
      
    })

    
  })
  