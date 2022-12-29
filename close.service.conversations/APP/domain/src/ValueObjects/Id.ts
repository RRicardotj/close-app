import ValueError from '../errors/ValueError';
import { v4 as uuidv4 } from 'uuid';

class Id {
  value: string;

  constructor(plainId: string) {
    if (plainId.length < 10) {
      throw new ValueError(`${ValueError.MESSAGES.DEFAULT_ERROR}: ID`)
    }
  
    this.value = plainId;

  }

  static create() {
    const id = new Id(uuidv4());

    return id;
  }
}

export default Id;
