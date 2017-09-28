'use strict';

module.exports = app => {
  app.get('/a', 'home.index');
  app.get('/hi', 'home.a');
  app.get('/kebe', 'home.nba');
  app.post('/abc', 'home.gao');
  app.post('/abcd', 'home.xu');
  app.post('/qw', 'home.dx');
};
