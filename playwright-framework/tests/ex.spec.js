const { test, expect } = require('@playwright/test');
test('login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')
    await page.locator('input[type = "text"]').fill('standard_user');
    await page.locator('input[id = "password"]').fill('secret_sauce');
    await page.locator('input[value="Login"]').click();
    await expect(page).toHaveTitle('Swag Labs');
    await page.locator('a[id="item_4_title_link"]').click();
    await page.locator('div [id="add-to-cart"]').click();
    await page.locator(' [class="shopping_cart_link"]').click();
    const logoelement = await page.locator('.shopping_cart_badge');
    await expect(logoelement).toBeVisible();

})