import { HomePage } from '../pages/homePage';
import { ManagerPage } from '../pages/managerPage';
import { config } from '../configs/config';

describe('Bank manager', () => {
  const homePage = new HomePage();
  const managerPage = new ManagerPage();

  let customerName:string = config.customerName;
   
  beforeEach(() => {
    cy.visit('/');
    homePage.clickLoginAs('Bank Manager Login');
  });

  it('Should be able to for customer using either his first name, last name, post code or account number', () => {    
    managerPage.searchForACustomer(customerName);
    managerPage.getCustomersDetails().should(t => {
      const customerDetails = t.trim();
      const expectedCustomerName = customerName.trim();
      expect(customerDetails).to.contain(expectedCustomerName);
      });
  });
});