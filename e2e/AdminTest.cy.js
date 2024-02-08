
import LoginPage from "../PageObjects/LoginPage";
import AdminPage from "../PageObjects/AdminPage";



  describe('Admin Page Test', () => {
    beforeEach(() => {
      LoginPage.visit();
      LoginPage.login('Admin', 'admin123');
      
      AdminPage.visit();
      
    });

    it('should navigate to Admin page successfully', () => {
      cy.get(".oxd-text.oxd-text--h5.oxd-table-filter-title").should('contain', 'System Users');
      AdminPage.clickAddButton();
      cy.url().should('include', '/admin/saveSystemUser');
      cy.wait(2000);
    });


  
});