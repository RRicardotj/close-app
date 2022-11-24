import Id from '../ValueObjects/Id';
import Message from './Message';

describe('Message model instance', () => {
  test('It should create an instance of Message model', () => {
    const id = Id.create();
    const conversationId = Id.create();
    const content = 'Encrypted content from frontend';
    const ownerId = Id.create();
    const createdAt = new Date();

    const message = new Message(id, conversationId, ownerId, content, createdAt);

    expect(message).toBeInstanceOf(Message);
  });

  test('When static method .create is invoked an instance should be created', () => {
    const ownerId = Id.create();
    const conversationId = Id.create();
    const content = 'Encrypted content from frontend';
    const message = Message.create({ ownerId, content, conversationId });

    expect(message).toBeInstanceOf(Message);
  });
});