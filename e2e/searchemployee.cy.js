
import LoginPage from "../PageObjects/LoginPage";
import PIMPage from "../PageObjects/PIMPage";



describe('Add New Employee Test', () => {

  let employeeId;
  
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.login('Admin', 'admin123');
    PIMPage.visit();
  });

  it('should add a new employee and verify employee is saved', () => {
    const firstName = 'John';
    const middleName = 'Doe';
    const lastName = 'Smith';
    PIMPage.addNewEmployee(firstName, middleName, lastName);
    cy.wait(2000);
    // Verify that the employee is saved
    PIMPage.verifyEmployeeInList(firstName, middleName, lastName);
    
      
    
  });


  
});
      
      