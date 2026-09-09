import {test} from '../fixtures/CustomFixtures';
test.describe('Instructor panel functionality', () => {

    test('Navigate to My Profile', async ({ homePage, page }) => {
        await page.goto('/');
        await homePage.navigateToUserProfilePage();
    
    });
});