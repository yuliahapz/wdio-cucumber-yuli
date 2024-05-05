import {$} from '@wdio/globals'

class DashboardPage {
    get addToCartButton() {
        return $('//*[@id="add-to-cart-sauce-labs-bike-light"]')
    }
    get cartButton () {
        return $('//*[@id="shopping_cart_container"]/a')
    }
    async validateOnPage() {
        await expect(this.addToCartButton).toBeDisplayed()
        
    }
    async klikCartButton() {
        await this.cartButton.click()
        await elem.waitForDisplayed({ timeout: 10000 })
    }

}
module.exports = new DashboardPage();