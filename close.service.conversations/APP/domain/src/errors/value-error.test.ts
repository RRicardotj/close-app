import ValueError from './ValueError';

describe('ValueError instance', () => {
  test('it should create an ValueError instance', () => {
    const valueError = new ValueError(ValueError.MESSAGES.DEFAULT_ERROR);
    expect(valueError).toBeInstanceOf(ValueError);
  });

  test('it should be instance of Error', () => {
    const valueError = new ValueError(ValueError.MESSAGES.DEFAULT_ERROR);

    expect(valueError).toBeInstanceOf(Error);
  });

  test('it should have name ValueError', () => {
    const valueError = new ValueError(ValueError.MESSAGES.DEFAULT_ERROR);

    expect(valueError.name).toBe('ValueError');
  })

  test('it should have static default message', () => {
    expect(ValueError.MESSAGES.DEFAULT_ERROR).toBe('Invalid value object');
  });
});