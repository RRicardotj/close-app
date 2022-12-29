import ValueError from '../errors/ValueError';

export default class Password {
  value: string;

  constructor(passwordString: string, options = { withoutHash: false }) {
    if (passwordString.length < 5) {
      throw new ValueError(`${ValueError.MESSAGES.DEFAULT_ERROR}: Password should be at least 5 characters`);
    }
 
    if (!options.withoutHash) {
      this.value = this.generateHash(passwordString);
    } else {
      this.value = passwordString;
    }
  }

  private generateHash(str: string): string {
    let hash = 0;
    let i;
    let chr;
  
    if (str.length === 0) return hash.toString();

    for (i = 0; i < str.length; i++) {
      chr = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + chr;
    }

    return hash.toString();
  }
}
