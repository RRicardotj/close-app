import Id from '../ValueObjects/Id';
import Password from '../ValueObjects/Password';

class Conversation {
  public id: Id;
  public creatorId: Id;
  public usersId: Id[];
  public createdAt: Date;
  public unionPassword: Password;

  constructor(id: Id, creatorId: Id, usersId: Id[], createdAt: Date, unionPassword: Password) {
    this.id = id;
    this.creatorId = creatorId;
    this.usersId = usersId;
    this.createdAt = createdAt;
    this.unionPassword = unionPassword;
  }

  static create(params: { id?: string, creatorId: Id, usersId?: Id[], createdAt?: Date, unionPassword: Password}) {
    const id = (params.id && new Id(params.id)) || Id.create();
    const { creatorId, unionPassword } = params;
    const usersId = params.usersId || [];
    const createdAt = params.createdAt || new Date();
  
    const conversation = new Conversation(id, creatorId, usersId, createdAt, unionPassword);

    return conversation;
  }
}

export default Conversation;
