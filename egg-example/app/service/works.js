/**
 * 2017-9-29 Gao dongxu
 */
'use strict';
module.exports = app => {
  class works extends app.Service {
    * wroksvote(param) {
      try {
        yield app.mysql.get('wroks', param);
      } catch (e) {
        this.ctx.looger.error(e);
        return false;
      }
      return true;
    }
    * worksupload(param) {
      try {
        yield app.mysql.insert('wroks', param);
      } catch (e) {
        this.ctx.looger.error(e);
        return false;
      }
      return true;
    }
    * wroksget(param) {
      try {
        yield app.mysql.get('wroks', param);
      } catch (e) {
        this.ctx.looger.error(e);
        return false;
      }
      return true;
    }
  }
  return works;
};

