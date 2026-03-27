import { login } from "./api/auth.api"
import { createUser } from "./api/users.api"
import { userFactory } from "./utils/dataFactory"

Cypress.Commands.add('authenticate',() => {

    const user = userFactory()

    return createUser(user).then(() => {
        return login(user.email, user.password).then((response) => {
            expect(response.status).to.eq(200)

            return{
                token: response.body.authorization,
                user
            }
        })
    })
})