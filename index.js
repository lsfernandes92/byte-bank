class Client {
  name;
  cpf;
  agency;
  balance;
}

const lucas = new Client();
const john = new Client();

lucas.name = 'Lucas Fernandes';
lucas.cpf = 12312312312;
lucas.agency = 0;
lucas.balance = 0;

john.name = 'John Doe';
john.cpf = 32112312312;
john.agency = 0;
john.balance = 0;

console.log(lucas);
console.log(john);