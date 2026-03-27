export const createProduct = (product, token) => {
  return cy.request({
    method: 'POST',
    url: 'https://serverest.dev/produtos',
     headers: {
      Authorization: token
    },
    body: product,
    failOnStatusCode: false
  })
}