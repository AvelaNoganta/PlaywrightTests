import { BasePage } from "../pages/BasePage";
import { expect, Locator } from "@playwright/test";

export class LoginPage extends BasePage {
    async openNdosiPage() {
        await this.GoToUrl('/');

    }

    async navigateToLoginPage() {
        await this.ClickElement(this.page.getByRole('button', { name: 'Login' }));
        await expect(this.page.locator('#login-email')).toBeVisible();
    }

    async userLogin(username: string, password: string) {
        await this.EnterText(this.page.locator('#login-email'), username);
        await this.EnterText(this.page.locator('#login-password'), password);
        await this.ClickElement(this.page.locator('xpath=//button[contains(.,"Login")]'));
    }
       get verifyHomePageHeading(): Locator {
        // //regex  for case insensitive match and to ignore any whitespace between "Welcome" and "back"
        return this.page.getByRole('heading', { name: /Welcome\s*back/i }); //Restore working regex
    }
}
