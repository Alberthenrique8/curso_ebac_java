/// <reference types="cypress" />

describe('Teste da Lista', () =>{

beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
})

    it('Testando a Adicao', () => {
        cy.get('input[placeholder="Nome"]').type('Albert')
        cy.get('input[placeholder="E-mail"]').type('albertsilva@gmail.com')
        cy.get('input[placeholder="Telefone"]').type('1158271278')
        cy.get('button.adicionar').click()
        cy.contains('Albert').should('exist')
        
    })
    
    it ('Testando a Alteração', () => {
        cy.get('input[placeholder="Nome"]').clear().type('Albert')
        cy.get('input[placeholder="E-mail"]').clear().type('albertsilva@gmail.com')
        cy.get('input[placeholder="Telefone"]').clear().type('1158271278')
        cy.get('button.adicionar').click()

        cy.get('button.edit').first().click()
        cy.get('input[placeholder="Nome"]').clear().type('Albert gsilva')
        cy.get('input[placeholder="E-mail"]').clear().type('albertgtavm002@gmail.com')
        cy.get('input[placeholder="Telefone"]').clear().type('11582223232')
        cy.get('button.alterar').click()
        cy.contains('Albert gsilva').should('exist')

        
    })

    it ('Testando a Exclusão', () => {
        cy.get('input[placeholder="Nome"]').type('Albert')
        cy.get('input[placeholder="E-mail"]').type('albertsilva@gmail.com')
        cy.get('input[placeholder="Telefone"]').type('1158271278')
        cy.get('button.adicionar').click()
        cy.contains('Albert').should('exist')

        cy.get('button.delete').first().click()
        
    })

})