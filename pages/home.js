const { I } = inject();
const Helper = require('../helpers/helper.js')

module.exports = {
  myAccountSpoiler: { xpath: '//*[@id="top-links"]/ul/li/span/span' },
  registerLink: { xpath: '//a[.="Register"]' },
  emptyCartText: { xpath: "//p[text() = 'Your shopping cart is empty!']" },
  cartIcon: { css: "i.linearicons-cart" },

  openRegistrationPage() {
    I.click(this.myAccountSpoiler);
    I.click(this.registerLink);
  },

  async checkCartIsEmpty() {
    I.click(this.cartIcon);
    return await Helper.checkElementIsVisible(this.emptyCartText);
  },

  async emptyCart() {
    let isCartEmpty = await this.checkCartIsEmpty();
    if (isCartEmpty) {
      // empty cart
    } else { // do nothing}
    }
  }
}
