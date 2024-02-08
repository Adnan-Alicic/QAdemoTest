// LogoutPage.js
class LogoutPage {
    // Method to click on the user profile dropdown and logout
    logout() {
      cy.get('.oxd-userdropdown-tab').click(); // Replace '.user-profile' with your selector for the user profile dropdown
      cy.contains('Logout').click(); // Replace 'Logout' with the text or selector of your logout button
    }
  }
  
  export default new LogoutPage();
  