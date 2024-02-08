// PIMPage.js
class PIMPage {
    visit() {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
    }
  
    getTitle() {
      return cy.get('.oxd-text.oxd-text--h5.oxd-table-filter-title');
    }
  
    getAddButton() {
      return cy.get('#btnAdd');
    }
  
    clickAddButton() {
      cy.get("button[class='oxd-button oxd-button--medium oxd-button--secondary']").click();
    }


    // New methods for adding a new employee
  getFirstNameInput() {
    return cy.get("input[name='firstName']");
  }

  getMiddleNameInput() {
    return cy.get("input[name='middleName']");
  }

  getLastNameInput() {
    return cy.get("input[name='lastName']");
  }

  getSaveButton() {
    return cy.contains('Save');
  }

  addNewEmployee(firstName, middleName, lastName) {
    this.clickAddButton();
    this.getFirstNameInput().type(firstName);
    this.getMiddleNameInput().type(middleName);
    this.getLastNameInput().type(lastName);
    this.getSaveButton().click();
    cy.get("#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.orangehrm-employee-container > div.orangehrm-employee-form > div:nth-child(1) > div.oxd-grid-2.orangehrm-full-width-grid > div > div > div:nth-child(2)").then(($ajdi)=> {
      const txt = $ajdi.text()
    })
  }

// Method to verify if an employee is present in the employee list
verifyEmployeeInList(firstName, middleName, lastName) {
    cy.get(".oxd-text.oxd-text--h6.--strong").should("be.visible");
    cy.get("#app > div.oxd-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(2) > a").click();
    cy.wait(3000);
    cy.get("#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(1) > div > div:nth-child(2) > div > div > input").type(`${firstName} ${middleName} ${lastName}`);
    cy.wait(3000);
    cy.get(':nth-child(2) > .oxd-input').type("txt");
    cy.wait(3000);
    cy.get("button[type='submit']").click();


    cy.get("div[class='oxd-table-body']")
    .each(($e1, index, $list) =>{ //iterating through array of elements
      const StoreText = $e1.text();      //storing iterated element
    if(StoreText.includes("${firstName} ${middleName} ${lastName}")){ 
                                      //If text found,iteration stops
      cy.get("div[class='oxd-table-body']")          //gets the CSS
        
        .eq(index)                    //grabs the content in index value
        
        .then(function (Taskcolumn) {
          
        const Tasktext = Taskcolumn.text();
          
        expect(Tasktext).to.equal("${firstName} ${middleName} ${lastName}");  
                                      //assertion to verify text
        
            })
        }
    })
  }

 
  
  
  }

    
  
  export default new PIMPage();
  