// Import test function and expect assertion from Playwright test library
import { test, expect } from '@playwright/test';
// Import the ApiService class that handles API requests
import { ApiService } from '../services/ApiService';
// Import test data containing valid user credentials
import { validUsers } from '../testdata/testdata';

// Create a test suite named 'Login API' to group all login-related tests
test.describe('Login API', () => {
    // Declare a variable to hold the ApiService instance that will be used across all tests
    let apiService: ApiService;

    // Hook that runs once before all tests in this suite - used for setup/initialization
    test.beforeAll(async ({ playwright }) => {
        // Create a new HTTP request context with the specified base URL for all API calls
        const context = await playwright.request.newContext({
            baseURL: 'https://www.ndosiautomation.co.za/APIDEV'
        });
        // Initialize the ApiService with the HTTP context and base URL
        apiService = new ApiService(context, 'https://www.ndosiautomation.co.za/APIDEV');
    });

    // Test case: Verify that login succeeds when valid email and password are provided
    test('should login successfully with valid credentials', async () => {
        // Call the login method with admin username and password, store the API response
        const response = await apiService.login(validUsers.admin.username, validUsers.admin.password);
        // Assert that the HTTP response status code is 200 (OK), indicating successful login
        expect(response.status()).toBe(200);
        
        // Parse the response body as JSON to get the login response data (tokens, user info, etc.)
        const data = await response.json();
        // Log the login response to the console for debugging/verification purposes
        console.log('Login Response:', data);
        // Assert that the response data exists and is not null/undefined
        expect(data).toBeDefined();
    });
});
