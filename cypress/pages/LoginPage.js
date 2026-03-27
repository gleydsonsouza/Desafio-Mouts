import { loginSelectors } from "../selectors/login.selectors"

export class LoginPage{
    
    visit(){
        cy.visit('/')
    }

    fillEmail(email){
        cy.get(loginSelectors.emailInput).clear().type(email)
    }

    fillPassword(password){
        cy.get(loginSelectors.passwordInput).clear().type(password, {log: false})
    }

    registerButtonClick(){
        cy.get(loginSelectors.registerButon).click()
    }

    getTitle(){
        return cy.get(loginSelectors.title)
    }
    clickLoginButton(){
        cy.get(loginSelectors.loginButton).click()
    }

}