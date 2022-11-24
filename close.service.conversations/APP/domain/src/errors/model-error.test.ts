import ModelError from "./ModelError";

describe('ModelError instance', () => {
  test('it should create an ModelError instance', () => {
    const modelError = new ModelError(ModelError.MESSAGES.DEFAULT_ERROR);
    expect(modelError).toBeInstanceOf(ModelError);
  });

  test('it should be instance of Error', () => {
    const modelError = new ModelError(ModelError.MESSAGES.DEFAULT_ERROR);

    expect(modelError).toBeInstanceOf(Error);
  });

  test('it should have name ModelError', () => {
    const modelError = new ModelError(ModelError.MESSAGES.DEFAULT_ERROR);

    expect(modelError.name).toBe('ModelError');
  })

  test('it should have static default message', () => {
    expect(ModelError.MESSAGES.DEFAULT_ERROR).toBe('Invalid Model');
  });
});