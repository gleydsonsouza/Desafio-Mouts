import { productsListSelectors } from "../selectors/productsList.selectors";

export class ProductsListPage{

    getTitle(){
        return cy.get(productsListSelectors.title)
    }
}