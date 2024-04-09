
import { CustomerPage } from '../pages/customerPage';
import { HomePage } from '../pages/homePage';
import { AccountPage } from '../pages/accountPage';
import { ManagerPage } from '../pages/managerPage';
import { config } from '../configs/config';

describe('Login', () => {
  const customerPage = new CustomerPage();
  const homePage = new HomePage();
  const accountPage = new AccountPage();
  const managerPage = new ManagerPage();

  let customerName:string = config.customerName;

  it('Should login successfully as Customer', () => {
    cy.visit('/');
    homePage.clickLoginAs('Customer Login');
    customerPage.getDropdownLabel().should('contain.text', 'Your Name :');
    customerPage.loginWithCustomerCredentials(customerName);
    accountPage.getCustomersNameLabel().should('contain.text', customerName);
    cy.url().should("include", "/account");
  });

  it('Should login successfully as Manager', () => {
    cy.visit('/');
    homePage.clickLoginAs('Bank Manager Login');
    managerPage.customersButton().should('contain.text', 'Customers');
    cy.url().should("include", "/manager");
  });
});