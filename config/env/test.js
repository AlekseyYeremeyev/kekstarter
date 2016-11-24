module.exports = {
  target: 'http://localhost:3000',
  apiTarget: 'http://localhost:3000/api',
  apiPath: '/api',
  storageKey: 'user_session',
  session: {
    tokenKey: 'authentication_token',
    emailKey: 'email'
  },
  test: {
    port: 9999
  }
};
