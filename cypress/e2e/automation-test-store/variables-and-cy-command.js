/// <reference types="cypress" />

describe('Verifying variables, cypress commands and jQuerry commands', () => {


    it('Navigating to specific product pages', () => {
        cy.visit('https://automationteststore.com/');
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains('Makeup');
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains('Skincare');
        // makeupLink.click();
        // skincareLink.click();

        cy.get("a[href*='product/category&path=']").contains('Makeup').click();
        cy.get("a[href*='product/category&path=']").contains('Skincare').click();

    });

    it('Navigating to specific product pages', () => {
        cy.visit('https://automationteststore.com/');
        cy.get("a[href*='product/category&path=']").contains('Makeup').click();
        
        // const header = cy.get('h1 .maintext');
        // cy.log("Found the header text: " + header.text());
        cy.get('h1 .maintext').then(($headerText) => {
            const headerText = $headerText.text();
            cy.log("Found the header text: " + headerText);
            expect(headerText).is.eq('Makeup');
        });
    });

    it.only('Validate properties of the contact us page', () => {
        cy.visit('https://automationteststore.com/index.php?rt=content/contact');
        
        //Uses cypress commands and chaining
        cy.contains("#ContactUsFrm", "Contact Us Form").find('#field_11').should('contain', 'First name:')
        //JQuerry approach
        cy.contains("#ContactUsFrm", "Contact Us Form").then(text => {
            const firstNameText = text.find('#field_11').text()
            expect(firstNameText).to.contain('First name:')

            //Embedd commands (closure)

            cy.get('#field_11').then(fnText => {
                cy.log(fnText.text())
                cy.log(text)
            })
        })
        
    });



});