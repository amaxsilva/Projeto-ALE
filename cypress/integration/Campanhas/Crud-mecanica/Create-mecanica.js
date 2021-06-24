/// <reference types="cypress" />

import LoginPage from "../../LoginPage";
const loginPage = new LoginPage


Given(/^que o usuário esteja na tela home$/, () => {
    cy.viewport(1366, 635)
    loginPage.acessarSite();
    cy.title().should('be.equal', 'Clube ALE - ADMIN') //validar o nome da página
    cy.wait(3000) // time de 3000ms
});

And(/^clicar no menu lateral esquerdo em "([^"]*)" e "([^"]*)"$/, (args1,args2) => {
	console.log(args1,args2);
    loginPage.acessarMenuCampanha();
    cy.contains('Adicionar campanha')
    cy.get('.btn-primary').click() //Clica no botão Criar campanha
    cy.url().should('be.equal', 'https://homolog.clubeale.com.br/admin/campanha/adicionar-campanhas')
});

When(/^preencher os dados$/, () => {
	 /*Tipo de campanha, date e name*/
     cy.get('form.ng-untouched > :nth-child(1) > :nth-child(1) > .form-group').click()
     cy.get('#name').type('Teste campanha mecanica')
 
     cy.get(':nth-child(1) > :nth-child(2) > .form-group').click() 
     cy.get('.ng-invalid > .row > .col-md-6 > .form-group > #type').select('mechanic')//Seleciona tipo de campanha
     //empty, code and mechanic(vazia, codigo e mecanica)      
 
     cy.get(':nth-child(1) > :nth-child(3) > .form-group').click() //Seleciona o status    
     cy.get('.ng-invalid > .row > .col-md-6 > .form-group > #status').select('active') //Seleciona status ativo   
 
     cy.get(':nth-child(1) > :nth-child(4) > .form-group').click()
     cy.get('.ng-invalid > .row > .col-md-6 > .form-group > #enabled').select('true') //Habilitada  
 
     cy.get(':nth-child(1) > .col-md-6.ng-star-inserted > .form-group').click() //Date
    // cy.contains('jun').click()
  
     cy.get('.ng-invalid > .row > .col-md-6 > .form-group > #department').click() //departamento          
     cy.get('.ng-invalid > .row > .col-md-6 > .form-group > #department').type('MKT')
 
     cy.get('.mat-tab-body-content > .ng-star-inserted > .ng-invalid > .row > .col-md-6:nth-child(8)').click() //meta            
     cy.get('.ng-invalid > .row > .col-md-6 > .form-group > #participantsGoal').type('150')
 
     
 
     /*Paginas descrição da campanha*/
     cy.get(':nth-child(1) > .form-group > #txtResumo > .ql-container > .ql-editor').click() //Resumo
     cy.get(':nth-child(1) > .form-group > #txtResumo > .ql-container > .ql-editor > p').type('Teste de campanha de código - Resumo')
 
     cy.get('#txtDescription > .ql-container > .ql-editor').click() //Descrição
     cy.get('#txtDescription > .ql-container > .ql-editor > p').type('Teste de campanha de código - Descrição')
 
     cy.get(':nth-child(3) > .form-group > #txtResumo > .ql-container > .ql-editor').click() //Como participar
     cy.get(':nth-child(3) > .form-group > #txtResumo > .ql-container > .ql-editor > p').type('Teste de campanha de código - Como Participar')
 
     cy.get('#txtRegulamento > .ql-container > .ql-editor').click() // Regulamento
     cy.get('#txtRegulamento > .ql-container > .ql-editor > p').type('Teste de campanha de código - Regulamento')
});

Then(/^o sistema deve criar a campanha do tipo vazia$/, () => {
	return true;
});
