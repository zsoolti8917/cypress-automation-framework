/// <reference types="cypress" />

describe('Handle js alerts', () => {
    it('Confirm that a js alert contains the correct text', () => {
        //cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#popup-alerts').invoke('removeAttr', "target").click({force:true})
        cy.get('#button1').click()

        cy.on('window:alert', (str)=>{
            expect(str).to.equal("I am an alert box!")
        })
    });

    it('Click on a js alert and valideate if Ok is pressed', () =>{
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#popup-alerts').invoke('removeAttr', "target").click({force:true})
        cy.get('#button4').click()
       // cy.get('#confirm-alert-text').invoke('text').should('equal', 'You pressed OK!')
       cy.on('window:confirm', (str) =>{
        return true;
       })

       cy.get('#confirm-alert-text').invoke('text').should('equal', 'You pressed OK!')
    })

    it('Click on a js alert and valideate if Cancel is pressed', () =>{
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#popup-alerts').invoke('removeAttr', "target").click({force:true})
        cy.get('#button4').click()
       // cy.get('#confirm-alert-text').invoke('text').should('equal', 'You pressed OK!')
       cy.on('window:confirm', (str) =>{
        return false;
       })
       cy.get('#confirm-alert-text').invoke('text').should('equal', 'You pressed Cancel!')
    
    })

    it('Click on a js alert using a stub and veryfing the OK', () =>{
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#popup-alerts').invoke('removeAttr', "target").click({force:true})

        const stub = cy.stub()
        cy.on('window:confirm', stub)


        cy.get('#button4').click().then(()=>{
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(() =>{
            cy.get('#confirm-alert-text').contains('You pressed OK!');
        })

        
    
    })

    it('Click on a js alert using a stub and veryfing the Cancel', () =>{
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#popup-alerts').invoke('removeAttr', "target").click({force:true})

        const stub = cy.stub().returns(false)
        cy.on('window:confirm', stub)


        cy.get('#button4').click().then(()=>{
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(() =>{
            cy.get('#confirm-alert-text').contains('You pressed Cancel!');
        })

        
    
    })
});