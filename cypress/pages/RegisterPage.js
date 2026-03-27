import { registerSelectors } from "../selectors/register.selectors";

export class RegisterPage{

    fillName(name){
        cy.get(registerSelectors.nameField).clear().type(name)
    }
    fillEmail(email){
        cy.get(registerSelectors.emailField).clear().type(email)
    }
    fillPassword(password){
        cy.get(registerSelectors.passordField).clear().type(password, {log: false})
    }
    clickRegisterButton(){
        cy.get(registerSelectors.registerButton).click()
    }
    successMessage(){
        return cy.get(registerSelectors.successMessage)
    }
    clickAdminRegisterButton(){
        cy.get(registerSelectors.adminRegisterButton).click()
    }
}