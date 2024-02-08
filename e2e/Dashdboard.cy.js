import LoginPage from "../PageObjects/LoginPage";

describe('Dashboard', () => {
  beforeEach(() => {
    LoginPage.visit();
    // Replace 'username' and 'password' with valid credentials
    LoginPage.login();
    // Wait for the dashboard page to load after successful login
    cy.url().should('include', '/dashboard');
  });

  it('should display all expected elements on the dashboard page', () => {
    
    // Verify that the "Admin" menu is present
    cy.contains('Admin').should('be.visible');

    // Verify that the "PIM" menu is present
    cy.contains('PIM').should('be.visible');

    // Verify that the "Leave" menu is present
    cy.contains('Leave').should('be.visible');

    // Verify that the "Dashboard" menu is present
    cy.contains('Dashboard').should('be.visible');
  });
});
