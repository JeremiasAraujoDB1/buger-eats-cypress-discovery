import home from '../pages/HomePage'

describe('Suite de teste da página Home Page', ()=>{

    it('App deve está online', ()=>{
        home.go()

        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    })

})