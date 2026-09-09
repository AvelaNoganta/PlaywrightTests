import {test} from '../fixtures/CustomFixtures';
test.describe('Instructor panel functionality', () => {

    test('Navigate to Instructor Panel', async ({ homePage, page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');
        await homePage.navigateToUserProfilePage();
    });
});