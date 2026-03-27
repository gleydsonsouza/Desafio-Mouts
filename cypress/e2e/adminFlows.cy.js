const { HomeAdminPage } = require("../pages/HomeAdminPage");
const { HomePage } = require("../pages/HomePage");
const { LoginPage } = require("../pages/LoginPage");
const { ProductsListPage } = require("../pages/ProductsListPage");
const { RegisterPage } = require("../pages/RegisterPage");
const { RegisterProductsPage } = require("../pages/RegisterProductsPage");

const loginPage = new LoginPage();
const registerPage = new RegisterPage();
const homePage = new HomePage();
const homeAdminPage = new HomeAdminPage()
const registerProductsPage = new RegisterProductsPage()
const productsListPage = new ProductsListPage()

describe('Admin - Registration, Authentication and Product Management', () => {

    beforeEach(() => {
            loginPage.visit()
    })
    it('should register a new admin account correctly', () => {
        loginPage.registerButtonClick()
        registerPage.fillName('Test')
        registerPage.fillEmail(Cypress.env('EMAIL'))
        registerPage.fillPassword(Cypress.env('PASSWORD'))
        registerPage.clickAdminRegisterButton()
        registerPage.clickRegisterButton()
        registerPage.successMessage().should('contain.text', 'Cadastro realizado com sucesso')
        homeAdminPage.getWelcomeTitle().should('be.visible').and('contain.text', 'Bem Vindo').and('contain.text', 'Teste')
    })
    it('should login and logout correctly', () => {
        loginPage.fillEmail(Cypress.env('EMAIL'))
        loginPage.fillPassword(Cypress.env('PASSWORD'))
        loginPage.clickLoginButton()
        homeAdminPage.getTitle().should('be.visible').and('contain.text', 'Bem Vindo').and('contain.text', 'Teste')
        homeAdminPage.logoutButonClick()
        homePage.getTitle().should('be.visible').and('contain.text', 'Login')
    })
    it('Should register a new product correctly', () => {
        loginPage.fillEmail(Cypress.env('EMAIL'))
        loginPage.fillPassword(Cypress.env('PASSWORD'))
        loginPage.clickLoginButton()
        homeAdminPage.getWelcomeTitle().should('be.visible').and('contain.text', 'Bem Vindo').and('contain.text', 'Teste')
        homeAdminPage.clickButtonRegisterProducts()
        registerProductsPage.getTitle().should('be.visible').and('contain', 'Cadastro de Produtos')
        registerProductsPage.fillName('Tapioca')
        registerProductsPage.fillPrice('10')
        registerProductsPage.fillDescription('Comida')
        registerProductsPage.fillQuantity('10')
        registerProductsPage.uploadImage() 
        registerProductsPage.clickSubmitButton()
        productsListPage.getTitle().should('be.visible').and('contain.text', 'Lista dos Produtos')
    })
})