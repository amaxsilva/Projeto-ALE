/// <reference types="cypress" />

import LoginPage from "../../LoginPage";
const loginPage = new LoginPage

	Given(/^que estou na tela de lista de campanhas$/, () => {
		loginPage.acessarSite();
		loginPage.acessarMenuCampanha();
		
	});

	When(/^digitar no campo "Nome da campanha": <nome da campanha CT01>$/, (args1) => {
		console.log(args1);
		cy.get('.ng-untouched > .row > .col-md-12 > .form-group > #txtNomeCampanha').click()	
	    cy.get('.ng-untouched > .row > .col-md-12 > .form-group > #txtNomeCampanha').type('Teste de campanha Vazia nova')
	});

	When(/^clicar no botão "([^"]*)"$/, (args1) => {
		console.log(args1);
		cy.get('.card-body > .ng-valid > .row > .col-md-12 > .btn-success').click()
	});

	Then(/^o sistema deve exibir a campanha pesquisada$/, () => {
		cy.contains('Teste de campanha Vazia nova')
	});	
   