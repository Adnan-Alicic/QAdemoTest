// AdminPage.js
class AdminPage {
    visit() {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
    }
  
  
    getAddButton() {
      return cy.get('#btnAdd');
    }
  
    clickAddButton() {
        cy.get("button[class='oxd-button oxd-button--medium oxd-button--secondary']").click();
    }
  }
  
  export default new AdminPage();
  