/**
 * 2017-9-29 Gao dongxu
 */
'use strict';
module.exports = app => {
  class user extends app.Service {
    * userget(param) {
      try {
        yield app.mysql.get('user', param);
      } catch (e) {
        this.ctx.looger.error(e);
        return false;
      }
      return true;
    }
    * userregister(param) {
      try {
        yield app.mysql.insert('user', param);
      } catch (e) {
        this.ctx.looger.error(e);
        return false;
      }
      return true;
    }
    * uservote(param) {
      try {
        yield app.mysql.update('user', param);
      } catch (e) {
        yield this.ctx.looger.error(e);
        return false;
      }
      return true;
    }
    * mobileupdate(param) {
      try {
        yield app.mysql.update('user', param);
      } catch (e) {
        this.ctx.looger.error(e);
        return false;
      }
      return true;
    }
    * moileset(param) {
      try {
        yield app.mysql.insert('user', param);
      } catch (e) {
        this.ctx.looger.error(e);
        return false;
      }
      return true;
    }
  }
  return user;
};

