import Conversation from './Conversation';
import Id from '../ValueObjects/Id';
import Password from '../ValueObjects/Password';

describe('Conversation instance', () => {
  test('it should create an instance of Conversation model', () => {
    const id = Id.create();
    const creatorId = Id.create();
    const usersId: Id[] = [];
    const createdAt = new Date();
    const unionPassword = new Password('1234567');
  
    const conversation = new Conversation(id, creatorId, usersId, createdAt, unionPassword);

    expect(conversation).toBeInstanceOf(Conversation);
  });

  test('When static method .create is invoked an instance should be created', () => {
    const conversation = Conversation.create({ creatorId: Id.create(), unionPassword: new Password('12345678')});

    expect(conversation).toBeInstanceOf(Conversation);
  });
});