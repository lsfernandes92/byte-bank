import { Client } from './Client.js'

export class CheckingAccount {
  agency;
  client;
  // The '#' is a new feature that has been approved by some JS RFC
  // and that indicates that the class attribute is private.
  // You can take a peek at: https://github.com/tc39/proposal-class-fields#private-fields
  // We can also see some projects using the '_' instead.
  // This also means that the class attribute is private. 
  #balance = 0;

  get client() {
    return this.client;
  }

  set client(newClient) {
    if (newClient instanceof Client) {
      this.client = newClient;
    }
  }

  get currentBalance() {
    return this.#balance;
  }

  withdraw(amount) {
    if (amount <= 0) return console.log('The amount must be positive!\n');
    
    if (amount <= this.#balance) {
      this.showSuccessfullyOperationMessage('withdraw', amount);
      return true;
    } else {
      console.log('Your balance is insufficient :(\n');
    }
  }

  deposit(amount) {
    if (amount <= 0) return console.log('The amount must be positive!\n');

    this.showSuccessfullyOperationMessage('deposit', amount);  
  }

  transfer(amount, fromAccount, destinationAccount) {
    fromAccount.withdraw(amount) == true 
      ? destinationAccount.deposit(amount) 
      : console.log('Transfer canceled :(');
  }

  showSuccessfullyOperationMessage(operation, amount) {
    let operationType = '';
    operationType = operation == 'withdraw' ? 'withdrawn' : 'deposited'

    console.log(`Successfully ${operationType}!`);
    console.log(`Account owner: ${this.client.name}`);
    console.log(`Previous balance $ ${this.currentBalance}`);
    console.log(`${operationType.capitalize()} amount: $ ${amount}`);

    switch (operation) {
      case 'withdraw':
        this.#balance -= amount;
        break;
      case 'deposit':
        this.#balance += amount;
        break;
    }
    
    console.log(`Current balance $ ${this.currentBalance}\n`);
  }
}

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};