/// <reference types="cypress" />

describe('Contact Us Form test via AutomationTestStore', () => {
    it.only('Should be able to submit a successful submission via contact us form', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('.info_links_footer > :nth-child(5) > a').click().then(function(itemHeaderText){
            cy.log("Selected the following item: " + itemHeaderText.text())
        });
        cy.get('#ContactUsFrm_first_name').type("Joe");
        cy.get('#ContactUsFrm_email').type("test@test.com").should('have.value', 'test@test.com');
        cy.get('#ContactUsFrm_enquiry').type("How can I learn Cypress?");
        cy.get('button[title="Submit"]').click();
        cy.get('.contentpanel').should('contain.text', 'Your enquiry has been successfully sent to the store owner!');


    });

    it('Should not be able to submit a successful submission via contact us form as all fields are required', () => {

    });
});