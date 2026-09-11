
import { BasePage } from './BasePage';
export class ProfilePage extends BasePage {
   
    async updateProfile(gitUsername: string) {
        await this.ClickElement(this.page.locator('css = button:has-text("✏️ Edit Profile")')); 
        await this.EnterText(this.page.getByPlaceholder('e.g., octocat'), gitUsername);
        await this.ClickElement(this.page.locator('css = button:has-text("Save Changes")'));
    }
}