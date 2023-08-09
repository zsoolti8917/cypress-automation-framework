/// <reference types="cypress" />

describe('Inspect Automation Test store items using chain of commands', () => {
    it('Click on the first item in the content using item header', () => {
       cy.visit('https://automationteststore.com/');
       cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click();
    });

    it.only('Click on the first item in the content using item text', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('.prdocutname')
            .contains('Skinsheen Bronzer Stick')
            .click()
            .then(function(itemHeaderText){
                cy.log("Selected the following item: " + itemHeaderText.text())
            });
        

     });

    it('Click on the first item in the content first item', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('#featured > .container-fluid')
            .find('.thumbnail')
            .first()
            .click();

     });


});