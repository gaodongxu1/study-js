/**
 * 2017-9-27 gaodongxu
 */
'use strict';
module.exports = app => {
  class Student extends app.Service {
    * studentcreate(param) {
      try {
        yield app.mysql.insert('student', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * studentselect() {
      let res;
      try {
        res = yield app.mysql.select('student');
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
    * studentdelete(param) {
      try {
        yield app.mysql.delete('student', param);
      } catch (e) {
        this.ctx.logger.error(e);
        this.ctx.logger.warn();
        return false;
      }
      return true;
    }
  }
  return Student;
};

