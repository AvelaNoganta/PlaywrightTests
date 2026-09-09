import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { validUsers } from '../testdata/testdata';

const authFile = 'playwright/.auth/user.json';
setup('authenticate', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.GoToUrl('/');
    await loginPage.navigateToLoginPage();
    await loginPage.userLogin(validUsers.admin.username, validUsers.admin.password);
    await loginPage.VerifyElementIsVisible(loginPage.verifyHomePageHeading);
    await page.context().storageState({
        path: authFile
    });

});