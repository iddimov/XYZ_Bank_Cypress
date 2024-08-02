**Cypress test automation**
Requirements:
1. Install node.js
2. Install/update Cypress

**Parameterized tests:**
1. Login as Bank Customer "CUSTOMER_NAME"
2. Verify the balance
3. Deposit X amount into the account
4. Verify the balance

**-**
1. Login as Bank Manager
2. Search for "CUSTOMER_NAME" customer
3. Delete "CUSTOMER_NAME"

**How to run:**
1. Open the terminal
2. Open the Cypress tests and pass parameters, for example customer's name:
npx cypress open --env CUSTOMER_NAME='Harry Potter'
