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
                expect(productName).to.contain('Carrot')
            }
        })
    }

    clickOnRemoveProductFromCart() {
        return cy.get('div[class="cart-preview active"] a[class="product-remove"]').click()
    }

    productInTheCart() {
        return cy.get('div[class="cart-preview active"] p[class="product-name"]')
    }

    messageEmptyCart() {
        cy.get('div[class="cart-preview active"] div[class="empty-cart"] h2').then(function (message) {
            const emptyCartMessage = message.text()
            if (emptyCartMessage.includes("You cart is empty!")) {
                expect(emptyCartMessage).to.equal('You cart is empty!')

            }
        })

    }
}
export default HomePage;