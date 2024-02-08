class LoginPage {
  constructor() {
    // Define username and password constants
    this.username = 'Admin';
    this.password = 'admin123';

    this.username2= "Admin1";
    this.password2= "admin";
  }
  
    visit() {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }
  
    getUsernameInput() {
      return cy.get("input[placeholder='Username']");
    }
  
    getPasswordInput() {
      return cy.get("input[placeholder='Password']");
    }
  
    getLoginButton() {
      return cy.get("button[type='submit']");
    }
  
    login(username, password) {
      this.getUsernameInput().type(this.username);
      this.getPasswordInput().type(this.password);
      this.getLoginButton().click();

      
    }
    loginFail(username2, password2) {
      this.getUsernameInput().type(this.username2);
      this.getPasswordInput().type(this.password2);
      this.getLoginButton().click();

      
    }
  }
  
  export default new LoginPage();