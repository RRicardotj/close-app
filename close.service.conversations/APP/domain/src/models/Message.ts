import Id from '../ValueObjects/Id';

class Message {
  public id: Id;
  public content: string;
  public conversationId: Id;
  public ownerId: Id;
  public createdAt: Date;

  constructor(
    id: Id,
    conversationId: Id,
    ownerId: Id,
    content: string,
    createdAt: Date) {
      this.id = id;
      this.conversationId = conversationId;
      this.content = content;
      this.createdAt = createdAt;
      this.ownerId = ownerId;
    }

  static create(
    params: {
      ownerId: Id,
      content: string,
      conversationId: Id,
      id?: string,
      createdAt?: Date
    }
    ) : Message {
      const { id, ownerId, content, conversationId, createdAt } = params;
      const messageId = id && new Id(id) || Id.create();
      const date = createdAt || new Date();

      const message = new Message(messageId, conversationId, ownerId, content, date);

      return message;
  }

  static parseFromJson(jsonObject: { id: string, ownerId: string, content: string, conversationId: string, createdAt: string }) : Message {
    const id = new Id(jsonObject.id);
    const ownerId = new Id(jsonObject.ownerId);
    const { content } = jsonObject;
    const conversationId = new Id(jsonObject.conversationId);
    const createdAt = new Date(jsonObject.createdAt);

    const message = new Message(id, conversationId, ownerId, content, createdAt);

    return message;
  }
}

export default Message;