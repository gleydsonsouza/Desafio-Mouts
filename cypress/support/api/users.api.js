export const createUser = (user) => {
  return cy.request({
    method: 'POST',
    url: 'https://serverest.dev/usuarios',
    body: user,
    failOnStatusCode: false
  })
}