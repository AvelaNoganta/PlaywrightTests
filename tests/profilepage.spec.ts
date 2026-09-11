import { test } from '../fixtures/CustomFixtures';
import { userProfile } from '../testdata/testdata';

test.describe('User Profile', () => {

    test('should update the git username', async ({ page, homePage, profilePage }) => {
        await page.goto('/');
        await homePage.navigateToUserProfilePage();
        await profilePage.updateProfile(userProfile.gitusername.username);
    });

});