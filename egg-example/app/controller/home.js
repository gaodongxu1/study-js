'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      this.ctx.body = 'hi, egg';
    }
    * a() {
      this.ctx.body = 'hello';
    }
    * nba() {
      const a = yield this.service.pp.test();
      this.ctx.body = a.data;
    }
    * gao() {
      const c = yield this.service.pp.ab();
      this.ctx.body = c.data;
    }
    * xu() {
      const d = yield this.service.pp.xuu();
      this.ctx.body = d;
    }

  }
  return HomeController;
};

