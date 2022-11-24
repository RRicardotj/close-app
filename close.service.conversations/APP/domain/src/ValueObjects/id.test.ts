import Id from './Id';
import ValueError from '../errors/ValueError';

describe('Id instance', () => {
  test('it should create an id instance', () => {
    const id = new Id('abcdefghijklmnopqrst');

    expect(id).toBeInstanceOf(Id);
  })

  test('it should have an value for string sent in the constructor', () => {
    const plainId = 'abcdefghijklmnopqrst';
    const id = new Id(plainId);

    expect(id.value).toBe(plainId);
  });

  test('it should thrown an Value Error when value is less than 10 characters', () => {
    const plainId = 'abcde';

    expect(() => new Id(plainId)).toThrow(ValueError);
  });

  test('it should generate random id when static .create method is invoked', () => {
    const id = Id.create();

    expect(id.value).toBeDefined();
  });

  test('it should create different id values when two ids are randomly generated', () => {
    const id = Id.create();
    const id2 = Id.create();

    expect(id.value).not.toBe(id2.value);
  })
});
