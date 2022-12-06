import Id from "../ValueObjects/Id";
import MessageRequest from './MessageRequest';

describe('Message Request instance', () => {
  test('It should create a message request model instance', () => {
    const id = Id.create();
    const conversationId = Id.create();
    const userId = Id.create();
    const createdAt = new Date();
    const userAlias = 'Fulano';
    const notificationMessage = 'Hello I want to connect';

    const messageRequest = new MessageRequest(id, conversationId, userId, userAlias, createdAt, notificationMessage);

    expect(messageRequest).toBeInstanceOf(MessageRequest);
  });
});