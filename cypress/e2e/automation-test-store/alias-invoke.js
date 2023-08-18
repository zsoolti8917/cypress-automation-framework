/// <reference types="cypress" />

describe('Alias and invoke', () => {


    it('Validate a specific Hair Care product', () => {
        cy.visit('https://automationteststore.com/');
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click();
        cy.get(".fixed_wrapper > .fixed > .prdocutname").eq(0).invoke('text').as('productThumbnail')
        cy.get('@productThumbnail').its('length').should('be.gt', 5)
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')
    });


    it('Validate the number of products in the homepage', () =>{
        cy.visit('https://automationteststore.com/');
        cy.get('.thumbnail').each(($el, index, $list) =>{
            cy.get(".productcart").should("have.attr", "title", "Add to Cart")        
        }).then(($list) =>{
            expect($list).to.have.length(16)
        })
    })

    it("Solution to previous", () => {
        cy.visit('https://automationteststore.com/');
        cy.get('.thumbnail').as('productThumbnail')
        cy.get('@productThumbnail').its('length').should('equal', 16)
        cy.get('@productThumbnail').find('.productcart').should('have.attr', 'title', 'Add to Cart')
    })

    it.only("Calculate total of normal and sale products", () => {
        cy.visit('https://automationteststore.com/');
        cy.get('.thumbnail').as('productThumbnail')
        // cy.get('@productThumbnail').find('.oneprice').each(($el, index , $list) =>{
            
        // })

        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')
        var itemsTotalPrice = 0;
        cy.get('@itemPrice').then($linkText =>{
            
            var itemsPriceTotal = 0;
            var itemPrice = $linkText.split('$')
            var i;
            for(i = 0; i < itemPrice.length; i++){
                
                itemsTotalPrice += Number(itemPrice[i])
                
            }
            
        })

        cy.get('@saleItemPrice').then($linkText =>{
            var saleItemsPriceTotal = 0;
            var saleItemPrice = $linkText.split('$')
            var i;
            for(i = 0; i < saleItemPrice.length; i++){
                
                itemsTotalPrice += Number(saleItemPrice[i])
                
            }
            
        })
        .then(() =>{
            cy.log("Total price = " + itemsTotalPrice)
            expect(itemsTotalPrice).to.equal(660.5)

        })

    })

});