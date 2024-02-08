
import LoginPage from "../PageObjects/LoginPage";
import PIMPage from "../PageObjects/PIMPage";



describe('PIM Page Test', () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.login('Admin', 'admin123');
    PIMPage.visit();
  });

  it('should navigate to PIM page successfully', () => {
    PIMPage.getTitle().should('contain', 'Employee Information');
    cy.wait(3000);
    PIMPage.clickAddButton();
    cy.url().should('include', '/pim/addEmployee');
  });



  
});