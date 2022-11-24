class ModelError extends Error {

  static MESSAGES = {
    DEFAULT_ERROR: 'Invalid Model',
  }

  constructor(message: string) {
    super(message);

    this.name = 'ModelError';
    this.message = message;
  }
}

export default ModelError;
