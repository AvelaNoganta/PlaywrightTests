import { BasePage } from "../pages/BasePage";
import { Locator } from "@playwright/test";

export class HomePage extends BasePage {
    async navigateToUserProfilePage() {
        // Wait for page to be fully loaded
        await this.page.waitForLoadState('networkidle');
        
        // Try to find and click Menu button with more flexible matching
        const menuButton = this.page.locator('button:has(span:text-matches("Menu"))').first();
        await menuButton.waitFor({ state: 'visible', timeout: 5000 });
        await this.ClickElement(menuButton);
        
        // Click My Profile option
        const myProfileButton = this.page.locator('span:text-matches("My Profile")');
        await myProfileButton.waitFor({ state: 'visible', timeout: 5000 });
        await this.ClickElement(myProfileButton);   
    }
}