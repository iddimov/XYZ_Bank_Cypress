import { TransactionPage } from "./transactionPage";

export class AccountPage {
    // Locators
    private customersNameLocator:string = '.fontBig';
    private accountBalanceLocator:string = 'div[class="center"] strong:nth-child(2)';
    private accountCurrencyLocator:string = 'div[class="center"] strong:nth-child(3)';      
    private addDepositButtonLocator:string = 'button[ng-class=btnClass2]';
    private addDepositInputfieldLocator:string = 'input[placeholder=amount]';
    private submitDepositButtonLocator:string = 'button[type=submit]';
    private depositSuccessfulMsgLocator:string = '.error';
    
    
    getCustomersNameLabel() {
      return cy.get(this.customersNameLocator);
    }
  
    getCurrentBalance() {
      return cy.get(this.accountBalanceLocator).invoke('text');
    }

    setDeposit(amount: number){
      cy.get(this.addDepositButtonLocator).click();
      
      let depositForm = cy.get('form');
      depositForm.get(this.addDepositInputfieldLocator).type(amount.toString());
      depositForm.get(this.submitDepositButtonLocator).click();
    }

    getSuccessfulDepositedMsg(){
      return cy.get(this.depositSuccessfulMsgLocator).invoke('text');
    }    
  }