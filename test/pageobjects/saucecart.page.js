import {$} from '@wdio/globals'

class CartPage {
    get checkoutButton (){
        return $ ('#checkout');
    }
    async validateOnPage() {
        await expect(this.checkoutButton).toHaveText("checkout")
    }
}

module.exports = new CartPage();