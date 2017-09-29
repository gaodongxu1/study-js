'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    // * login() {
    //   this.ctx.body = yield this.service.xueji.logininsert(this.ctx.request.body);
    // }
    // * upload() {
    //   this.ctx.body = yield this.service.xueji.uploadinsert(this.ctx.request.body);
    // }
    // * moblie() {
    //   this.ctx.body = yield this.service.xueji.moblieinsert(this.ctx.request.body);
    // }

    // * vote() {
    //   this.ctx.body = yield this.service.xueji.voteinsert(this.ctx.request.body);
    // }
    // * view() {
    //   this.ctx.body = yield this.service.xueji.viewselect(this.ctx.request.body);
    // }

    * user1() {
      this.ctx.body = yield this.service.xueji.userdelete(this.ctx.request.body);
    }
    * user2() {
      this.ctx.body = yield this.service.xueji.userselect(this.ctx.request.body);
    }
    * user3() {
      this.ctx.body = yield this.service.xueji.usercreate(this.ctx.request.body);
    }
    * works() {
      this.ctx.body = yield this.service.xueji.workscreate(this.ctx.request.body);
    }
  }
  return HomeController;
};

