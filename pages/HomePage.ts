import { BasePage } from "../pages/BasePage";

export class HomePage extends BasePage {
    async navigateToUserProfilePage() {
        // Wait for page to be fully loaded
        await this.page.waitForLoadState('networkidle');
      
        await this.ClickElement(this.page.locator('xpath=//button//span[text() = "Menu"]'));
        await this.ClickElement(this.page.locator('xpath=//span[contains(.,"My Profile")]'));
    }
}