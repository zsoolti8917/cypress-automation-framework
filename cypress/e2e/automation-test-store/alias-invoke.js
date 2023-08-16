/// <reference types="cypress" />

describe('Alias and invoke', () => {


    it.only('Validate a specific Hair Care product', () => {
        cy.visit('https://automationteststore.com/');
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click();
        cy.get(".fixed_wrapper > .fixed > .prdocutname").eq(0).invoke('text').as('productThumbnail')
        cy.get('@productThumbnail').its('length').should('be.gt', 5)
        
    });







});