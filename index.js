import { Client } from './Client.js'
import { CheckingAccount } from './CheckingAccount.js'

const lucas = new Client();

lucas.name = 'Lucas Fernandes';
lucas.cpf = 12312312312;

const lucasCA = new CheckingAccount();

lucasCA.agency = 0;
lucasCA.deposit(100);
lucasCA.withdraw(50);

console.log(lucas);
console.log(lucasCA);