import Conversation from './Conversation';
import Id from '../ValueObjects/Id';

describe('Conversation instance', () => {
  test('it should create an instance of Conversation model', () => {
    const id = Id.create();
    const creatorId = Id.create();
    const usersId: Id[] = [];
    const createdAt = new Date();
  
    const conversation = new Conversation(id, creatorId, usersId, createdAt);

    expect(conversation).toBeInstanceOf(Conversation);
  });

  test('When static method .create is invoked an instance should be created', () => {
    const conversation = Conversation.create({ creatorId: Id.create() });

    expect(conversation).toBeInstanceOf(Conversation);
  });
});