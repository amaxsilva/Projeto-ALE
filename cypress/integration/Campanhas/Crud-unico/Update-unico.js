/// <reference types="cypress" />

import LoginPage from "../../LoginPage";
const loginPage = new LoginPage

    Given(/^que estou na tela de lista de campanha$/, () => {
        loginPage.acessarSite();
		loginPage.acessarMenuCampanha();
    });

    And(/^selecionoar a campanha desejada$/, () => {
        cy.get('.ng-untouched > .row > .col-md-12 > .form-group > #txtNomeCampanha').click()	
	    cy.get('.ng-untouched > .row > .col-md-12 > .form-group > #txtNomeCampanha').type('Teste de campanha Vazia nova')
        cy.get('tbody > tr:nth-child(1) > td > .btn > .fa').click()  //Pesquisar
    });

    When(/^clico no icone da lupa$/, () => {
        cy.get('.ng-star-inserted > .ng-untouched > .row > .col-md-12 > .btn').click() 
    });

    Then(/^o sistema deve abrir a campanha para edição$/, () => {
        cy.get('.ng-untouched > .row > .col-md-6 > .form-group > #department').click() 
        cy.get('.ng-untouched > .row > .col-md-6 > .form-group > #department').click() 
        cy.get('.ng-untouched > .row > .col-md-6 > .form-group > #department').type('RH') 
        cy.get('.ng-star-inserted > .ng-valid > .row > .col-md-12 > .btn:nth-child(2)').click()
    });
 
    
    
