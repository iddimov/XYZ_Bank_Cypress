export class CustomerPage {
    // Locators
    private dropdownLabelLocator:string = 'label';
    private dropdownlocatorLocator:string = '#userSelect';
    private loginButtonLocator:string = 'form > button';
    
    getDropdownLabel() {
      return cy.get(this.dropdownLabelLocator);
    }
  
    loginWithCustomerCredentials(name: string){
        cy.get(this.dropdownlocatorLocator).select(name);
        cy.get(this.loginButtonLocator).click();
    }
  }