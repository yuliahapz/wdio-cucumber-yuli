import {$} from '@wdio/globals'

class loginPage {
    get username(){
        return $('#user-name');

    }

    get password(){
        return $('#password');

    }

    get loginButton(){
        return $('#login-button');

    }

    async inputUserName(username) {
        await this.username.setValue(username)
    }
    async inputpassword(password) {
        (await this.password).setValue(password)
    }
    async login(username, password) {
        await this.inputUsername(username)
        await this.inputPassword(password)
        await this.clickLoginButton()
    }

    open() {
        return browser.url(`https://www.saucedemo.com/`);
}
}

module.exports = new SauceLoginPage();