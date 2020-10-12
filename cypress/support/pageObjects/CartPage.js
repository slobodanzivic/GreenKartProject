class CartPage {

    clickOnProceedToCheckOutBtn() {
        return cy.get('.cart-preview> .action-block>  button').click()
    }

    messageEmptyCart() {
        cy.get('div[class="cart-preview active"] div[class="empty-cart"] h2').then(function (message) {
            const emptyCartMessage = message.text()
            if (emptyCartMessage.includes("You cart is empty!")) {
                expect(emptyCartMessage).to.equal('You cart is empty!')

            }
        })

    }

    clickOnPlaceOrder() {
        return cy.get('div.products > div > button').click()
    }

    clickOnTermsAndConditions() {
        return cy.get('.chkAgree').click()
    }

    clickOnProceedBtn() {
        return cy.get('button').click()
    }

    validateMessage() {
        cy.get('[style="color:green;font-size:25px"]').then(function (textMessage) {
            let message = textMessage.text()
            expect(message).to.equal("Thank you, your order has been placed successfully  You'll be redirected to Home page shortly!!")
        })
    }
}
export default CartPage;