'use strict';

module.exports = app => {
  app.get('/a', 'home.index');
  app.get('/hi', 'home.a');
  app.get('/kebe', 'home.nba');
  app.get('/abc', 'home.gao');
  app.get('/abcd', 'home.xu');
};
