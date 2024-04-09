export class TransactionPage {
    // Locators
    private resetTransactionHistoryButtonLocator:string = 'button[ng-show=showDate]';
    private viewTransactionsButtonLocator:string = 'button[ng-class=btnClass1]'; 
    private backButtonLocator:string = 'button[ng-click^=back]';
    private dateTimeTransactionCellsLocator:string = 'tbody td:nth-child(1)'
    private amountTransactionCellsLocator:string = 'tbody td:nth-child(2)';
    private calendarStartDateInputLocator:string = '#start';

    resetAllTransactionHistory() {
      cy.get(this.resetTransactionHistoryButtonLocator).click();
    }

    openTransactionHistoryPage(){
        cy.get(this.viewTransactionsButtonLocator).click();
    }

    clickOnBackButton(){
        cy.get(this.backButtonLocator).click();
    }

    getMostRecentTransaction(){
      return cy.get(this.dateTimeTransactionCellsLocator).first().invoke('text');        
    }

    getMostRecentTransactionAmount(){
        return cy.get(this.amountTransactionCellsLocator).first().invoke('text');        
    }

    setTodaysDateOnTheCalendar(){
        cy.get(this.calendarStartDateInputLocator).click();
    }
 }