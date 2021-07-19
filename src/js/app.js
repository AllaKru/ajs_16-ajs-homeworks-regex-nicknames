
export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    return /^[a-z][\w-]+[a-z]$/i.test(this.name) && !/[0-9]{4,}/.test(this.name);
  }
}
