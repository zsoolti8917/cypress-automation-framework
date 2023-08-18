/// <reference types="cypress" />

describe('Contact Us Form test via WebdriverUni', () => {
    it.only('Should be able to submit a successful submission via contact us form', () => {
        //cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#contact-us').invoke('removeAttr', "target").click({force:true})
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.document().should('have.property', 'title').and('eq', 'WebDriver | Contact Us');
        cy.document().should('have.property', 'URL').and('eq', 'http://www.webdriveruniversity.com/Contact-Us/contactus.html');
        
        cy.get('[name="first_name"]').type("Joe");
        cy.get('[name="last_name"]').type("Blogs");
        cy.get('[name="email"]').type("test@test.com");
        cy.get('textarea.feedback-input').type("How can I learn Cypress?");
        cy.get('[type="submit"]').click();
        cy.get('h1').should('have.text', 'Thank You for your Message!');
        cy.go('back');
    


    });

    it('Should not be able to submit a successful submission via contact us form as all fields are required', () => {
        //cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('[name="first_name"]').type("Joe");
        cy.get('[name="last_name"]').type("Blogs");
        cy.get('textarea.feedback-input').type("How can I learn Cypress?");
        cy.get('[type="submit"]').click();
        cy.get('body').should('contain.text', 'Error: all fields are required');
        cy.go('back');
    });
});