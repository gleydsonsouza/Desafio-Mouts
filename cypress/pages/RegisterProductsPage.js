import { registerProductsSelectors } from "../selectors/registerProducts.selectors"

export class RegisterProductsPage{

    getTitle(){
        return cy.get(registerProductsSelectors.title)
    }
    fillName(name){
        cy.get(registerProductsSelectors.nameField).clear().type(name)
    }
    fillPrice(price){
        cy.get(registerProductsSelectors.priceField).clear().type(price)
    }
    fillDescription(description){
        cy.get(registerProductsSelectors.descriptionField).clear().type(description)
    }
    fillQuantity(quanity){
        cy.get(registerProductsSelectors.quantityField).clear().type(quanity)
    }
    uploadImage(){
        cy.get(registerProductsSelectors.imageField).selectFile('cypress/fixtures/Tapioca.jpg')
    }
    clickSubmitButton(){
        cy.get(registerProductsSelectors.submitButton).click()
    }
}