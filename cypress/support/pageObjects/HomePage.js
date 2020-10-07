class HomePage{

    clickOnSearchField () {
        return cy.get('input[type=search]').click()
    }

    clickOnSearchButton () {
        return cy.get('button.search-button').click()
    }

    clickOnCart () {
        return cy.get('a.cart-icon img')
    }

}
export default HomePage;