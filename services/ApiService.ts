// Import APIRequestContext from Playwright test library for making HTTP requests
import { APIRequestContext } from '@playwright/test';

// Export ApiService class to handle API operations throughout the test suite
export class ApiService {
    // Constructor that accepts APIRequestContext (for making HTTP requests) and baseURL (API endpoint)
    constructor(private request: APIRequestContext, private baseURL: string) {}

    // Async method to handle user login via POST request to /api/login endpoint
    // Parameters: email (user's email) and password (user's password)
    async login(email: string, password: string) {
        // Make a POST request to the login endpoint with email and password in the request body
        const response = await this.request.post(`${this.baseURL}/api/login`, {
            // data object contains the email and password credentials being sent to the API
            data: { email, password }
        });
        // Return the full response object (contains status code, headers, body, etc.)
        return response;
    }
}
