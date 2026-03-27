export const userFactory = () => ({
  nome: 'Usuario Teste',
  email: `user${Date.now()}@qa.com`,
  password: '123456',
  administrador: 'true'
})

export const productFactory = () => ({
  nome: `Produto ${Date.now()}`,
  preco: 100,
  descricao: 'Produto teste',
  quantidade: 10
})