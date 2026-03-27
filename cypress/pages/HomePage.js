import { homeSelectors } from "../selectors/home.selectors";

export class HomePage{
    
    getTitle(){
        return cy.get(homeSelectors.title)
    }

    logoutButonClick(){
        cy.get(homeSelectors.logoutButton).click()
    }
}