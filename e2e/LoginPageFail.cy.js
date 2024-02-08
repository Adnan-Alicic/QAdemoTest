
import LoginPage from "../PageObjects/LoginPage";

describe('Login Test Fail', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it('should not login successfully', () => {
    const username2 = '';
    const password2 = '';

    LoginPage.loginFail(username2, password2);
    cy.get("div[role='alert']").should('have.text', 'Invalid credentials');
  });

 
});