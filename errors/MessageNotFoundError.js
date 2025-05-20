class MessageNotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 404;
    // So the error is neat when stringified. NotFoundError: message instead of Error: message
    this.name = 'MsgNotFoundError';
  }
}

module.exports = MessageNotFoundError;
