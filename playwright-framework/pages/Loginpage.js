exports.loginpage = class loginpage {
    constructor(page) {
        this.page = page;
        this.loginlink = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
        this.usernameInput = 'input[placeholder = "Username"]';
        this.passwordInput = 'input[placeholder = "Password"]';
        this.loginButton = 'button[type = "submit"]'

    }
    async gotologinpage() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }
    async login(username, password) {
        await this.page.locator(this.loginlink).click();
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginButton).click();
    }


}
