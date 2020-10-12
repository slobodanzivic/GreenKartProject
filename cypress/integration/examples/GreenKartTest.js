///<reference types="Cypress"/>
import HomePage from '../../support/pageObjects/HomePage.js'
import CartPage from '../../support/pageObjects/CartPage.js'

describe('GreenKart test', function () {

    const homePage = new HomePage()
    const cartPage = new CartPage()

    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    })

    it('Go to https://rahulshettyacademy.com/seleniumPractise/#/', function () {
        cy.url().should('equal', 'https://rahulshettyacademy.com/seleniumPractise/#/')
    })

    it('Validate Page Title', function () {
        cy.title().should('equal', 'GreenKart - veg and fruits kart')
    })

    it('Check how many products are there in the page', function () {
        cy.get('h4.product-name').should('have.length', '30')

    })

    it('Type "ca" in search field, add Carrot to cart and validate whether Carrot is in the cart', function () {
        homePage.clickOnSearchField().type('ca').should('have.value', 'ca')
        homePage.chooseProductAndclickOnAddToCartBtn()
        homePage.clickOnCart()
        homePage.validateProductInTheCart()
    })

    it('Remove product from the cart', function () {
        homePage.clickOnSearchField().type('ca').should('have.value', 'ca')
        homePage.chooseProductAndclickOnAddToCartBtn()
        homePage.clickOnCart()
        homePage.clickOnRemoveProductFromCart()
        homePage.productInTheCart().should('not.be.visible')
        cartPage.messageEmptyCart()

    })

    it('Proceed to Checkout', function () {
        homePage.clickOnSearchField().type('ca').should('have.value', 'ca')
        homePage.chooseProductAndclickOnAddToCartBtn()
        homePage.clickOnCart()
        cartPage.clickOnProceedToCheckOutBtn()
        homePage.goToNewUrl()
        cartPage.clickOnPlaceOrder()
        cartPage.clickOnTermsAndConditions()
        cartPage.clickOnProceedBtn()
        cartPage.validateMessage()


    })
})