import Id from "../ValueObjects/Id";
import ConversationRequest from './ConversationRequest';

describe('Conversation Request instance', () => {
  test('It should create a Conversation request model instance', () => {
    const id = Id.create();
    const conversationId = Id.create();
    const userId = Id.create();
    const createdAt = new Date();
    const userAlias = 'Fulano';
    const notificationMessage = 'Hello I want to connect';

    const conversationRequest = new ConversationRequest(id, conversationId, userId, userAlias, createdAt, notificationMessage);

    expect(conversationRequest).toBeInstanceOf(ConversationRequest);
  });
});