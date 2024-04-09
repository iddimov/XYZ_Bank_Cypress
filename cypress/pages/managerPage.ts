export class ManagerPage {
    // Locators
    private customersButtonLocator:string = 'button[ng-class=btnClass3]';
    private customersSearchInputLocator:string = 'input[placeholder="Search Customer"]';
    private tableRowsLocator:string = 'tbody tr';

    customersButton() {
      return cy.get(this.customersButtonLocator);
    }

    searchForACustomer(search: string){
      this.customersButton().click();

      let textIndex = search.indexOf(' ');
      cy.get(this.customersSearchInputLocator).type(search.substring(0, textIndex));
    }

    getCustomersDetails(){
      return cy.get(this.tableRowsLocator).first().invoke('text');
    }
 }