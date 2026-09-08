import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';


type CustomFixtures = {
    loginPage: LoginPage;

};

export const test = base.extend<CustomFixtures>({

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    }

});

