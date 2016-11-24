module.exports = {
  target: 'http://localhost:3000',
  apiTarget: 'http://localhost:3000',
  apiPath: '/',
  storageKey: 'user_session',
  session: {
    tokenKey: 'authentication_token',
    emailKey: 'email'
  }
};
