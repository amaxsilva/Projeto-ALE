/// <reference types="cypress" />

import LoginPage from "../../LoginPage";
const loginPage = new LoginPage

it('CT01', () => {

        Given(/^que o usuário esteja na tela home$/, () => {
	    
           cy.viewport(1366, 635)
           loginPage.acessarSite();
           cy.title().should('be.equal', 'Clube ALE - ADMIN')
        });
        
       And(/^clicar no menu lateral esquerdo em "([^"]*)"$/, (args1) => {
               loginPage.acessarMenuCampanha()
        });

        When(/^preencher os dados na tela$/, () => {
                cy.get('.btn-primary').click() //Clica no botão Criar campanha         
                cy.get('.ng-untouched > .row > .col-md-6 > .form-group > #name').type('Teste de campanha Vazia nova')             
                cy.get('.ng-invalid.ng-dirty > :nth-child(1) > :nth-child(2)').click()  //Seleciona tipo de campanha           
                cy.get('.ng-invalid > .row > .col-md-6 > .form-group > #type').select('empty')             
                cy.get(':nth-child(1) > :nth-child(3) > .form-group').click()   //Seleciona o status    
                cy.get('.ng-invalid > .row > .col-md-6 > .form-group > #status').select('active') //Seleciona status ativo            
                cy.get(':nth-child(1) > :nth-child(4) > .form-group').click()            
                cy.get('.ng-invalid > .row > .col-md-6 > .form-group > #enabled').select('true')//Habilitada             
                cy.get(':nth-child(1) > :nth-child(5) > .form-group').click()             //Date
                cy.get('.ng-invalid > .row > .col-md-6 > .form-group > #startDate').type('2021-06-17')             
                cy.get(':nth-child(1) > :nth-child(6) > .form-group').click()             //Date
                cy.get('.ng-invalid > .row > .col-md-6 > .form-group > #endDate').type('2021-06-20')             
                cy.get('.ng-invalid > .row > .col-md-6 > .form-group > #department').click()   //departamento          
                cy.get('.ng-invalid > .row > .col-md-6 > .form-group > #department').type('MKT')                
                cy.get('.mat-tab-body-content > .ng-star-inserted > .ng-invalid > .row > .col-md-6:nth-child(8)').click() //meta            
                cy.get('.ng-invalid > .row > .col-md-6 > .form-group > #participantsGoal').type('150')
                cy.get(':nth-child(1) > .form-group > #txtResumo > .ql-container > .ql-editor').click()//Resumo
                cy.get(':nth-child(1) > .form-group > #txtResumo > .ql-container > .ql-editor > p').type('Teste de campanha Vazia - Resumo')
                cy.get('#txtDescription > .ql-container > .ql-editor').click()//Descrição
                cy.get('#txtDescription > .ql-container > .ql-editor > p').type('Teste de campanha Vazia - Descrição')
                cy.get(':nth-child(3) > .form-group > #txtResumo > .ql-container > .ql-editor').click()//Como participar
                cy.get(':nth-child(3) > .form-group > #txtResumo > .ql-container > .ql-editor > p').type('Teste de campanha Vazia - Como Participar')
                cy.get('#txtRegulamento > .ql-container > .ql-editor').click()// Regulamento
                cy.get('#txtRegulamento > .ql-container > .ql-editor > p').type('Teste de campanha Vazia - Regulamento')             
                // cy.get('.col-md-12.ng-star-inserted > .form-group').click() //Jotform            
                //cy.get('.ng-invalid > .row > .col-md-12 > .form-group > #externalLink').type('www.jotform.com')             
                cy.get(':nth-child(2) > :nth-child(6) > .form-group').click() //Valor premiação                           
                cy.get('.ng-star-inserted > .row > .col-md-6 > .form-group > #defaultReward').type('150')
                //cy.get(':nth-child(2) > :nth-child(7) > .form-group') - Ranking             
                cy.get('.mb-2 > .row > .text-right > .btn').click()  //filtro           
                cy.get('.ng-star-inserted > .ng-star-inserted > .row > .col-md-12 > .btn').click()
        });

        Then(/^o sistema deve criar a campanha do tipo vazia$/, () => {
            return true;
        });

});

/* it('', () => {
        cy.visit('www.google.com.br')

}) */

       
                
                   
                
                
               
   
   