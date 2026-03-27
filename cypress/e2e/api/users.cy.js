import { createUser } from "../../support/api/users.api"
import { userFactory } from "../../support/utils/dataFactory"

describe('Users api', () => {
    it('shuold create a user', () => {
        const user = userFactory()

        createUser(user).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('_id')
        })
    })
})