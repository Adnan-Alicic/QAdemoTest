
import LoginPage from "../PageObjects/LoginPage";
import LogoutPage from "../PageObjects/LogoutPage";

describe('Logout Functionality Test', () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.login(); // Login with valid credentials
    cy.url().should('include', '/dashboard');
    cy.wait(3000);
  });

  

  it('should log out successfully', () => {
    // Click on the user profile dropdown and then logout using LogoutPage methods
    LogoutPage.logout();

    // After logout, verify that the user is redirected to the login page
    cy.wait(3000);
    cy.url().should('include', '/login');
  });
});