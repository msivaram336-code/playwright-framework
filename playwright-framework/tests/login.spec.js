
import { test, expect } from '@playwright/test';
import { loginpage } from '../pages/Loginpage';
test('test', async ({ page }) => {
    const login = new loginpage(page);
    await login.gotologinpage();
    await login.login(loginData.username,
        loginData.password);
    await page.waitForTimeout(3000)


})