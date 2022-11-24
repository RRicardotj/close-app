import Id from '../ValueObjects/Id';

class Conversation {
  public id: Id;
  public creatorId: Id;
  public usersId: Id[];
  public createdAt: Date;

  constructor(id: Id, creatorId: Id, usersId: Id[], createdAt: Date) {
    this.id = id;
    this.creatorId = creatorId;
    this.usersId = usersId;
    this.createdAt = createdAt;
  }

  static create(params: { id?: string, creatorId: Id, usersId?: Id[], createdAt?: Date}) {
    const id = (params.id && new Id(params.id)) || Id.create();
    const { creatorId } = params;
    const usersId = params.usersId || [];
    const createdAt = params.createdAt || new Date();
  
    const conversation = new Conversation(id, creatorId, usersId, createdAt);

    return conversation;
  }
}

export default Conversation;
