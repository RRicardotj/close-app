import Id from '../ValueObjects/Id';

export default class MessageRequest {
  id: Id;
  conversationId: Id;
  userId: Id;
  userAlias: string;
  createdAt: Date;
  notificationMessage?: string;

  constructor(id: Id, conversationId: Id, userId: Id, userAlias: string, createdAt: Date, notificationMessage?: string) {
    this.id = id;
    this.conversationId = conversationId;
    this.userId = userId;
    this.userAlias = userAlias;
    this.createdAt = createdAt;
    this.notificationMessage = notificationMessage;
  }
}