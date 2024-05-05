describe('Demo Test Cases', () => {
    it('Test Case 1 - Success Login, Add to Cart, and Go to Cart', async () => {
        await browser.url('https://www.saucedemo.com/');

        const username = await browser.$('#user-name');
        const password = await browser.$('#password');
        const loginButton = await browser.$('#login-button');
        
        await username.setValue('standard_user');
        await password.setValue('secret_sauce');
        await loginButton.click();

        // Wait for the inventory page to load
        await browser.waitUntil(async () => {
            const url = await browser.getUrl();
            return url.includes('inventory.html');
        }, { timeout: 1000, timeoutMsg: 'Inventory page not loaded' });

        // Add item to cart
        const addToCartButton = await $('#add-to-cart-sauce-labs-backpack');
        await addToCartButton.click();

        // Wait for an element to be displayed after adding to cart
        await browser.waitUntil(async () => {
            const elem = await $('#shopping_cart_container');
            return elem.isDisplayed();
        }, { timeout: 1000, timeoutMsg: 'Element not displayed after adding to cart' });

        // Click on the cart icon to go to the cart page
        const cartIcon = await $('#shopping_cart_container');
        await cartIcon.click();

        // Verify that we are on the cart page (you can add more assertions if needed)
        await expect(browser).toHaveUrlContaining('cart.html');
        
    });
});
