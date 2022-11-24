class ValueError extends Error {
  static MESSAGES = {
    DEFAULT_ERROR: 'Invalid value object',
  }

  message: string;
  name: string;

  constructor(message: string) {
    super(message);

    this.message = message;
    this.name = 'ValueError';
  }
};

export default ValueError;
