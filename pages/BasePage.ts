import { expect, Locator, Page } from "@playwright/test";

export class BasePage {

    constructor(public page: Page) {}

    async GoToUrl(url: string) {
        await this.page.goto(url);
    }

    async ClickElement(locator: Locator) {
        await locator.click();
    }

    async EnterText(locator: Locator, text: string) {
        await locator.fill(text);
    }

    //Promise = “This method will eventually return a string.”
    async GetTextValue(locator: Locator): Promise<string> {
        return await locator.inputValue();
    }

    async VerifyElementIsVisible(locator: Locator) {
        await expect(locator).toBeVisible();
    }
}