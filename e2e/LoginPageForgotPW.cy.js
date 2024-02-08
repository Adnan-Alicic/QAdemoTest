describe('Forgot Password Link Test', () => {
    it('should redirect to password reset page when clicking on "Forgot Password?" link', () => {
      // Navigate to the login page
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
      // Click on the "Forgot Password?" link
      cy.contains('Forgot your password?').click();
  
      // Verify that the user is redirected to the password reset page
      cy.url().should('include', '/index.php/auth/requestPasswordResetCode');

      cy.get(".orangehrm-card-container").should("be.visible");
      cy.get("p[class='oxd-text oxd-text--p']").should("have.text",'Please enter your username to identify your account to reset your password');
      cy.get("button[type='submit']").should("be.visible");
      cy.get("button[type='button']").should("be.visible");
      
    });
  });
  