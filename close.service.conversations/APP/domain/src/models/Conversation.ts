import Id from '../ValueObjects/Id';
import Password from '../ValueObjects/Password';

class Conversation {
  public id: Id;
  public creatorId: Id;
  public userIds: Id[];
  public createdAt: Date;
  public unionPassword: Password;

  constructor(id: Id, creatorId: Id, userIds: Id[], createdAt: Date, unionPassword: Password) {
    this.id = id;
    this.creatorId = creatorId;
    this.userIds = userIds;
    this.createdAt = createdAt;
    this.unionPassword = unionPassword;
  }

  static create(params: { id?: string, creatorId: Id, userIds?: Id[], createdAt?: Date, unionPassword: Password }): Conversation {
    const id = (params.id && new Id(params.id)) || Id.create();
    const { creatorId, unionPassword } = params;
    const userIds = params.userIds || [];
    const createdAt = params.createdAt || new Date();
  
    const conversation = new Conversation(id, creatorId, userIds, createdAt, unionPassword);

    return conversation;
  }

  static parseFromJson(jsonObject: { id: string, creatorId: string, userIds: string[], createdAt: string, unionPassword: string }): Conversation {
    const id = new Id(jsonObject.id);
    const creatorId = new Id(jsonObject.creatorId);
    const userIds = jsonObject.userIds.map((id) => new Id(id));
    const createdAt = new Date(jsonObject.createdAt);
    const unionPassword = new Password(jsonObject.unionPassword, { withoutHash: true });

    const conversation = new Conversation(id, creatorId, userIds, createdAt, unionPassword);

    return conversation;
  }

}

export default Conversation;
