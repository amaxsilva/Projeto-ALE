/// <reference types="Cypress" />


class LoginPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit("/admin/login")
        cy.get('.auto-form-wrapper > .ng-pristine > .form-group > .input-group > #login').click()     
        cy.get('.auto-form-wrapper > .ng-valid > .form-group > .input-group > #login').type('')     
        cy.get('.auto-form-wrapper > .ng-valid > .form-group > .input-group > #senha').click()     
        cy.get('.auto-form-wrapper > .ng-valid > .form-group > .input-group > #senha').type('')     
        cy.get('.col-lg-4 > .auto-form-wrapper > .ng-valid > .form-group > .btn').click()
    }
   
    acessarMenuCampanha() {
        cy.get('[aria-controls="campanhas-dropdown"] > .menu-arrow').click()
        cy.get('.nav-item > #campanhas-dropdown > .nav > .nav-item:nth-child(3) > .nav-link').click()
    }

   
}

export default LoginPage;
