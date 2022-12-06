import ValueError from '../errors/ValueError';
import Password from './Password';

describe('Password instance', () => {
  test('It should create an password instance', () => {
    const password = new Password('123456789');

    expect(password).toBeInstanceOf(Password);
  });

  test('It should thrown an error when value is less than 5 characters', () => {
    const passwordString = '1234';

    expect(() => new Password(passwordString)).toThrow(ValueError);
  });

  test('It should replace the original password in string for a hashing fingerprint', () => {
    const passwordString = 'abcd1234567xyz';

    const password = new Password(passwordString).value;

    expect(password).not.toEqual(passwordString);
  });

  test('It should create the same fingerprint from the same source', () => {
    const passwordString = 'abcd1234567xyz';

    const password = new Password(passwordString).value;
    const password2 = new Password(passwordString).value;

    expect(password).toEqual(password2)
  });
});