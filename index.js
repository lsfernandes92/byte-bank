import { Client } from './Client.js'
import { CheckingAccount } from './CheckingAccount.js'

const lucas = new Client();
const foo = new Client();

lucas.name = 'Lucas Fernandes';
lucas.cpf = 12312312312;
foo.name = 'Foo';
foo.cpf = 11112312312;

const lucasCA = new CheckingAccount();
const fooCA = new CheckingAccount();

lucasCA.agency = 100;
lucasCA.client = lucas;
fooCA.agency = 101;
fooCA.client = foo;


lucasCA.deposit(100);
lucasCA.transfer(10, lucasCA, fooCA);
console.log(lucasCA);