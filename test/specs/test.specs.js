describe('Demo Test Cases', () => {
    it('Test Case 1 - Success Login', async () => {
        await browser.url('https://www.saucedemo.com/')

        const username =  await browser.$('#user-name')
        const password =  await browser.$('#password')
        const loginButton = await browser.$('#login-button')
        
        await username.setValue('standard_user')
        await password.setValue('secret_sauce')

        console.log(`Value dari button ${await loginButton.getValue()}`)
        await loginButton.click()

        const elem = await $('#add-to-cart-sauce-labs-backpack')
        await elem.waitForDisplayed({ timeout: 10000 })

        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')  
    })
})