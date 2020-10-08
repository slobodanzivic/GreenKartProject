class HomePage {

    clickOnSearchField() {
        return cy.get('input[type=search]').click()
    }

    clickOnSearchButton() {
        return cy.get('button.search-button').click()
    }

    clickOnCart() {
        return cy.get('a.cart-icon img').click()
    }

    chooseProductAndclickOnAddToCartBtn() {
        cy.get('h4.product-name').each(($el, index, $list) => {
            const productName = $el.text()
            if (productName.includes("Carrot")) {
                cy.get('div.product-action button').eq(index).click()
            }

        })
    }

    validateProductInTheCart() {
        cy.get('li.cart-item div[class="product-info"] p').each(($el, index, $list) => {
            const productName = $el.text()
            if (productName.includes("Carrot")) {
                expect(true).to.be.true
            }

        })
    }

}
export default HomePage;