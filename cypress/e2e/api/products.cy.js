import { createProduct } from "../../support/api/products.api"
import { productFactory } from "../../support/utils/dataFactory";

describe('Products API', () => {

    let token;
     before(() => { 
        cy.authenticate().then((auth) => {
        token = auth.token
        })
    })
    it('Should create a successsful product', () => {
        const product = productFactory()

        createProduct(product, token).then((response) => {
        expect(response.status).to.eq(201)
        expect(response.body.message).to.eq('Cadastro realizado com sucesso')
        })
    })
})