/// <reference types="cypress" />

describe('Iterate over elements', () => {


    it.only('Log information of all Hair Care products', () => {
        cy.visit('https://automationteststore.com/');
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click();

        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) =>{
            if($el.text().includes('Eau Parfumee au The Vert Shampoo')){
                cy.wrap($el).click()
            }
        })
    });

    it('Add specific product to basket', () => {
        cy.visit('https://automationteststore.com/');
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click();

    });





});