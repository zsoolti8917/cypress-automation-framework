/// <reference types="cypress" />

describe('Interact with dropdown lists', () => {
    it('select specific values via select dropdown lists', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#autocomplete-textfield').invoke('removeAttr', "target").click({force:true})
        cy.get('#myInput').type('A')
        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) =>{
            const prod = $el.text()
            const productToSelect = 'Avacado'

            if(prod === productToSelect){
                $el.click()
                cy.get('#submit-button').click()
                cy.url().should('include', 'Avacado')
            }
        })
    });

   
    

});