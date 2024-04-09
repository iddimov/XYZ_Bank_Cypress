export class HomePage {

    clickLoginAs(loginAs: string) {
      cy.contains(loginAs).click();
    }
  }