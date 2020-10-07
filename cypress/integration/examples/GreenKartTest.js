///<reference types="Cypress"/>
import HomePage from '../../support/pageObjects/HomePage.js'

describe('GreenKart test', function(){

    const homePage = new HomePage()

    it('Go to https://rahulshettyacademy.com/seleniumPractise/#/',function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.url().should('equal', 'https://rahulshettyacademy.com/seleniumPractise/#/')
    })

    it('Validate Page Title', function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.title().should('equal', 'GreenKart - veg and fruits kart')
    })
})