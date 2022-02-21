// <reference types="cypress" />

describe('508', () => {
   
  
    it('508', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click()
        const customThresholds = {
            performance: 0,
            accessibility: 50,
            seo: 0,
            //'first-contentful-paint': 2000,
            // 'largest-contentful-paint': 3000,
            // 'cumulative-layout-shift': 0.1,
            // 'total-blocking-time': 500,
          };
    
          const desktopConfig = {
            formFactor: 'desktop',
            screenEmulation: { disabled: true },
          };
        cy.lighthouse(customThresholds, desktopConfig);
      
    })

    
  })