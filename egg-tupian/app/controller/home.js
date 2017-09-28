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
      this.ctx.body = yield this.service.tupianku.delete(this.ctx.request.body);
    }
    * xu() {
      this.ctx.body = yield this.service.tupianku.select(this.ctx.request.body);
    }
    * dx() {
      this.ctx.body = yield this.service.tupianku.create(this.ctx.request.body);
    }
  }
  return HomeController;
};

