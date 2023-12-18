export class Client {
  name;
  #cpf;

  constructor(name, cpf) {
    this.name = name;
    this.#cpf = cpf;
  }

  get documentNumber() {
    return this.#cpf;
  }
}