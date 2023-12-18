export class CheckingAccount {
  agency;
  // The '#' is a new feature that has been approved by some JS RFC
  // and that indicates that the class attribute is private.
  // You can take a peek at: https://github.com/tc39/proposal-class-fields#private-fields
  // We can also see some projects using the '_' instead.
  // This also means that the class attribute is private. 
  #balance = 0;

  withdraw(amount) {
    if (amount <= 0) return console.log('The amount must be positive!\n');
    
    if (amount <= this.#balance) {
      this.showSuccessfullyOperationMessage('withdraw', amount);
    } else {
      console.log('Your balance is insufficient :(\n');
    }
  }

  deposit(amount) {
    if (amount <= 0) return console.log('The amount must be positive!\n');

    this.showSuccessfullyOperationMessage('deposit', amount);    
  }

  showSuccessfullyOperationMessage(operation, amount) {
    let operationType = '';
    operationType = operation == 'withdraw' ? 'withdrawn' : 'deposited'

    switch (operation) {
      case 'withdraw':
        this.#balance -= amount;
        break;
      case 'deposit':
        this.#balance += amount;
        break;
    }

    console.log(`Successfully ${operationType}!`);
    console.log(`Previous balance $ ${this.#balance}`);
    console.log(`${operationType.capitalize()} amount: $ ${amount}`);
    console.log(`Current balance $ ${this.#balance}\n`);
  }
}

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};