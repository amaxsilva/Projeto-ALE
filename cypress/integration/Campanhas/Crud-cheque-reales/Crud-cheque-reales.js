/// <reference types="cypress" />

import LoginPage from "../../LoginPage";
const loginPage = new LoginPage

it('Campanha cheque de reales' , () => {
   
    Given(/^que o usuário esteja na tela home$/, () => {
        cy.viewport(1366, 635)
        loginPage.acessarSite();
        cy.title().should('be.equal', 'Clube ALE - ADMIN') //validar o nome da página
        cy.wait(3000) // time de 3000ms
    });

    And(/^clicar no menu lateral esquerdo em "([^"]*)" e "([^"]*)"$/, (args1,args2) => {
        console.log(args1,args2);
        console.log(args1,args2);
        loginPage.acessarMenuCampanha();
        cy.get('.btn-primary').click() //Clica no botão Criar campanha
        cy.url().should('be.equal', 'https://homolog.clubeale.com.br/admin/campanha/adicionar-campanhas')
    });

    When(/^preencher os dados$/, () => {
        cy.get('form.ng-untouched > :nth-child(1) > :nth-child(1) > .form-group').click()
        cy.get('#name').type('Teste de campanha de código nova')
        cy.get(':nth-child(1) > :nth-child(2) > .form-group').click()  //Seleciona tipo de campanha           
        cy.get('.ng-invalid > .row > .col-md-6 > .form-group > #type').select('code')
        //empty, code and mechanic(vazia, codigo e mecanica)        
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
        cy.get(':nth-child(9) > .form-group').click()//seleciona tipo de codigo 
        cy.get('.ng-invalid > .row > .col-md-6 > .form-group > #codeType').select('check')
        cy.get('.ng-invalid > .row > .col-md-6:nth-child(10) > .form-group > #quantityCheck').click() //quantida de talões
        cy.get('.ng-invalid > .row > .col-md-6:nth-child(10) > .form-group > #quantityCheck').type('2') 
        cy.get('.ng-invalid > .row > .col-md-6:nth-child(11) > .form-group > #quantityCheck').click() //quantidade de seções por talão
        cy.get('.ng-invalid > .row > .col-md-6:nth-child(11) > .form-group > #quantityCheck').type('2') 
        //cy.get('#mat-tab-content-1-0 > .mat-tab-body-content > .ng-star-inserted > .ng-invalid > .row:nth-child(1)').click() 
        cy.get('.ng-untouched > .row:nth-child(1) > .col-md-6:nth-child(1) > .form-group > #value').click()//quantidade de folhas
        cy.get('.ng-untouched > .row > .ng-dirty:nth-child(1) > .form-group > #value').type('1') 
        cy.get('.ng-star-inserted > .row > .ng-dirty:nth-child(2) > .form-group > #value').click() //valor em reales
        cy.get('.ng-star-inserted > .row > .ng-dirty:nth-child(2) > .form-group > #value').type('150') 
        cy.get('.ng-star-inserted > .row > .ng-untouched:nth-child(1) > .form-group > #value').click() //quantidade de folhas href=55
        cy.get('.ng-star-inserted > .row > .ng-untouched:nth-child(1) > .form-group > #value').type('2') 
        cy.get('.ng-star-inserted > .row > .ng-invalid:nth-child(2) > .form-group > #value').click() //valor em reales
        cy.get('.ng-star-inserted > .row:nth-child(2) > .col-md-6:nth-child(2) > .form-group > #value').type('300')
        cy.get(':nth-child(1) > .form-group > #txtResumo > .ql-container > .ql-editor').click()//Resumo
        cy.get(':nth-child(1) > .form-group > #txtResumo > .ql-container > .ql-editor > p').type('Teste de campanha de código - Resumo')
        cy.get('#txtDescription > .ql-container > .ql-editor').click()//Descrição
        cy.get('#txtDescription > .ql-container > .ql-editor > p').type('Teste de campanha de código - Descrição')
        cy.get(':nth-child(3) > .form-group > #txtResumo > .ql-container > .ql-editor').click()//Como participar
        cy.get(':nth-child(3) > .form-group > #txtResumo > .ql-container > .ql-editor > p').type('Teste de campanha de código - Como Participar')
        cy.get('#txtRegulamento > .ql-container > .ql-editor').click()// Regulamento
        cy.get('#txtRegulamento > .ql-container > .ql-editor > p').type('Teste de campanha de código - Regulamento')                   
        cy.get('.mb-2 > .row > .text-right > .btn').click()  //filtro 
    });

    Then(/^o sistema deve criar a campanha do tipo cheque reales$/, () => {
        cy.get(':nth-child(7) > .col-md-12 > .btn').click()
    });        

})