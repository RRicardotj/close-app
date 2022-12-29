import Conversation from './Conversation';
import Id from '../ValueObjects/Id';
import Password from '../ValueObjects/Password';

describe('Conversation instance', () => {
  test('it should create an instance of Conversation model', () => {
    const id = Id.create();
    const creatorId = Id.create();
    const userIds: Id[] = [];
    const createdAt = new Date();
    const unionPassword = new Password('1234567');
  
    const conversation = new Conversation(id, creatorId, userIds, createdAt, unionPassword);

    expect(conversation).toBeInstanceOf(Conversation);
  });

  test('When static method .create is invoked an instance should be created', () => {
    const conversation = Conversation.create({ creatorId: Id.create(), unionPassword: new Password('12345678')});

    expect(conversation).toBeInstanceOf(Conversation);
  });

  test('It should create an instance from JSON object with .parseFromJson static method', () => {
    const jsonObject = {
      id: '123455667788990',
      creatorId: '12345512312435',
      userIds:  ['87891239123123', '123154623435435234', '23464352342342343'],
      createdAt: '2022-12-07T06:48:43.992Z',
      unionPassword: '12345657password',
    };
  
    const conversation = Conversation.parseFromJson(jsonObject);

    expect(conversation).toBeInstanceOf(Conversation);
  });
});