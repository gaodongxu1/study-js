'use strict';

module.exports = app => {
  app.post('/user/login', 'user.login');
  app.post('/user/register', 'user.register');

  app.post('/mobile/set', 'mobile.set');
  app.post('/mobile/update', 'mobile.update');

  app.post('/works/vote', 'works.vote');
  app.post('/works/upload', 'works.upload');
};
