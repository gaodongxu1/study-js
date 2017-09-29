/**
 * 2017-9-27 gaodongxu
 */
'use strict';
module.exports = app => {
  class Xueji extends app.Service {
    // * login(param) {
    //   try {
    //     yield app.mysql.insert('user', param);
    //   } catch (e) {
    //     this.ctx.logger.error(e);
    //     return false;
    //   }
    //   return true;
    // }
    // * uploadinsert(param) {
    //   try {
    //     yield app.mysql.insert('user', param);
    //   } catch (e) {
    //     this.ctx.logger.error(e);
    //     return false;
    //   }
    //   return true;
    // }
    // * moblie(param) {
    //   try {
    //     yield app.mysql.insert('user', param);
    //   } catch (e) {
    //     this.ctx.logger.error(e);
    //     return false;
    //   }
    //   return true;
    // }

    // * vote(param) {
    //   try {
    //     yield app.mysql.insert('user', param);
    //   } catch (e) {
    //     this.ctx.logger.error(e);
    //     return false;
    //   }
    //   return true;
    // }
    // * view(param) {
    //   try {
    //     yield app.mysql.select('user', param);
    //   } catch (e) {
    //     this.ctx.logger.error(e);
    //     return false;
    //   }
    //   return true;
    // }

    * usercreate(param) {
      try {
        yield app.mysql.insert('user', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * userselect() {
      let res;
      try {
        res = yield app.mysql.select('user');
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
    * userdelete(param) {
      try {
        yield app.mysql.delete('user', param);
      } catch (e) {
        this.ctx.logger.error(e);
        this.ctx.logger.warn();
        return false;
      }
      return true;
    }
    * workscreate(param) {
      try {
        yield app.mysql.insert('works', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
  }
  return Xueji;
};

