module.exports = {
  target: 'http://kekstarter.herokuapp.com',
  apiTarget: 'http://kekstarter.herokuapp.com',
  apiPath: '/',
  storageKey: 'user_session',
  session: {
    tokenKey: 'authentication_token',
    emailKey: 'email'
  }
};
