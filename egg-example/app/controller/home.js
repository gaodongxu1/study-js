'use strict';

module.exports = app => {
  class HomeController extends app.Controller {

    * studentdelete() {
      this.ctx.body = yield this.service.student.studentdelete(this.ctx.request.body);
    }
    * studentselect() {
      this.ctx.body = yield this.service.student.studentselect(this.ctx.request.body);
    }
    * studentcreate() {
      this.ctx.body = yield this.service.student.studentcreate(this.ctx.request.body);
    }
  }
  return HomeController;
};

