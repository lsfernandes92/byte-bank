import { Client } from './Client.js'
import { CheckingAccount } from './CheckingAccount.js'

const lucas = new Client('Lucas Fernandes', 12312312312);
const foo = new Client('Foo Doe', 11112312312);

const lucasCA = new CheckingAccount(100, lucas);
const fooCA = new CheckingAccount(101, foo);

lucasCA.deposit(100);
lucasCA.transfer(10, lucasCA, fooCA);
console.log(lucas);
console.log(lucasCA);