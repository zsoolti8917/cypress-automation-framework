/// <reference types="cypress" />

describe('Verify radio buttons', () => {
    it('Check specific radio buttons', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', "target").click({force:true})
        cy.get('#radio-buttons').find('[type="radio"]').first().click().should('be.checked')
    });

    it.only('Selected & disabled radio buttons', () =>{
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', "target").click({force:true})
        //cy.get('#radio-buttons-selected-disabled').invoke('attr', "value", "lettuce").click()

        cy.get("[value = 'lettuce']").should('not.be.checked')
        cy.get("[value = 'pumpkin']").should('be.checked')
        cy.get("[value = 'cabbage']").should('be.disabled')
    })
    

});