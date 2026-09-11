import { test } from '../fixtures/CustomFixtures';
import { validUsers } from '../testdata/testdata';


test.describe('Login functionality', () => {

    test('Positive login - Admin', async ({ loginPage }) => {
        await loginPage.GoToUrl('/');
        await loginPage.navigateToLoginPage();
        await loginPage.userLogin(validUsers.admin.username, validUsers.admin.password);
        await loginPage.VerifyElementIsVisible(loginPage.verifyHomePageHeading);
    });
});