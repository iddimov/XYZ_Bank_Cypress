import { CustomerPage } from '../pages/customerPage';
import { HomePage } from '../pages/homePage';
import { AccountPage } from '../pages/accountPage';
import { TransactionPage } from '../pages/transactionPage';
import { config } from '../configs/config';

describe(`${config.customerName}'s Account` , () => {
  const customerPage = new CustomerPage();
  const homePage = new HomePage();
  const accountPage = new AccountPage();
  const transactionPage = new TransactionPage();

  let customerName:string = config.customerName;
  let depositSuccessfulMessage:string = 'Deposit Successful';
  let depositAmount:number = 500;
  
  beforeEach(() => {
    cy.visit('/');
    homePage.clickLoginAs('Customer Login');
    customerPage.loginWithCustomerCredentials(customerName);
    accountPage.getCustomersNameLabel().should('contain.text', customerName);
  });


  it('Customer should be able to see the account balance', () => {    
    accountPage.getCurrentBalance().should(value => {
        expect(Number.isNaN(+value), 'Input should be a number').to.eq(false); // false if the value is a number
      });
  });

  it(`Customer should be able to deposit $ ${depositAmount} and verify the transaction`, () => {            
    let currentBalanceString: string;

    // Get the current balance as a string and convert it to a number asynchronously
    cy.then(() => {
        accountPage.getCurrentBalance().then(balance => {
            currentBalanceString = balance;
    
            // Convert the current balance string to a number
            let currentBalance: number;
            currentBalance = parseFloat(currentBalanceString);
    
            accountPage.setDeposit(depositAmount);        
            accountPage.getSuccessfulDepositedMsg().should(t => expect(t).to.eq(depositSuccessfulMessage)); 

            if (!isNaN(currentBalance)) {                
                accountPage.getCurrentBalance().should(t => expect(parseFloat(t)).to.equal(currentBalance + depositAmount));
            } else {                
                throw new Error("Current balance is not a valid number.");
            }
        });
    });
   
    transactionPage.openTransactionHistoryPage();
    transactionPage.setTodaysDateOnTheCalendar();
    transactionPage.getMostRecentTransactionAmount().should(t => expect(t).to.eq(depositAmount));
  });

});