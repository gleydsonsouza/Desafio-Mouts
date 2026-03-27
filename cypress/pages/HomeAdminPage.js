import { homeAdminSelectors } from "../selectors/homeAdmin.selectors";

export class HomeAdminPage{

    getWelcomeTitle(){
        return cy.get(homeAdminSelectors.welcomeTitle)
    }

    clickButtonRegisterProducts(){
        cy.get(homeAdminSelectors.registerProductsButton).click()
    }
    getTitle(){
        return cy.get(homeAdminSelectors.welcomeTitle)
    }
    logoutButonClick(){
        cy.get(homeAdminSelectors.logoutButton).click()
    }
}