
import LoginPage from "../PageObjects/LoginPage";

describe('Login Test', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it('should login successfully', () => {
    const username = '';
    const password = '';

    LoginPage.login(username, password);
    cy.url().should('include', '/dashboard');
  });

  
});