///<reference types="Cypress"/>
import HomePage from '../../support/pageObjects/HomePage.js'

describe('GreenKart test', function(){

    const homePage = new HomePage()

    beforeEach(() =>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    })

    it('Go to https://rahulshettyacademy.com/seleniumPractise/#/',function(){
        cy.url().should('equal', 'https://rahulshettyacademy.com/seleniumPractise/#/')
    })

    it('Validate Page Title', function(){
        cy.title().should('equal', 'GreenKart - veg and fruits kart')
    })

    it('Check how many products are there in the page', function(){
        cy.get('h4.product-name').should('have.length', '30')

    })
})