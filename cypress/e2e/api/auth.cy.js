import { login } from "../../support/api/auth.api"

describe('auth api', () => {

    let user
    before(() => { 
        cy.authenticate().then((auth) => {
            user = auth.user
        })
    }) 
    it('successful authentication', () => {
        login(user.email, user.password).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('authorization')
            expect(response.body.authorization).to.be.a('string')
        })
    })
})