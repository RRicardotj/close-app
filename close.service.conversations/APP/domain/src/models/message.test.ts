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

  test('It should create an instance from JSON object with .parseFromJson static method', () => {
    const jsonObject = {
      id: '123455667788990',
      ownerId: '12345512312435',
      conversationId:  '87891239123123',
      createdAt: '2022-12-07T06:48:43.992Z',
      content: 'Encrypted content from frontend',
    };
  
    const message = Message.parseFromJson(jsonObject);

    expect(message).toBeInstanceOf(Message);
  });
});