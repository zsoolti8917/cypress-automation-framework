/// <reference types="cypress" />

describe('Handling Checkboxes and radio buttons', () => {
    it('Handle checkboxes', () => {
        //cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', "target").click({force:true})
       //cy.get('#checkboxes > :nth-child(1)>input').first().click()
       //cy.get('#checkboxes > :nth-child(1)>input').should('be.checked')

       cy.get('#checkboxes > :nth-child(1)>input').as('option-1')
      // cy.get('@option-1').check()
       cy.get('@option-1').check().should('be.checked')
    });

    it('uncheck and validate a checkbox', () =>{
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', "target").click({force:true})

        cy.get('#checkboxes > :nth-child(5)>input').as('option-3')
        cy.get('@option-3').uncheck().should('not.be.checked')
    })

    it.only('Check multiple checboxes', () =>{
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', "target").click({force:true})

        cy.get("input[type='checkbox']").check(["option-1", "option-2","option-3","option-4"]).should('be.checked')
    })

});