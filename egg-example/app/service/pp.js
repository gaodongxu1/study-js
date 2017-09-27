'use strict';
module.exports = app => {
  class Pp extends app.Service {
    * test() {
      return yield app.curl('http://www.sina.com.cn');
    }
    * ab() {
      return yield app.curl('http://www.sina.com.cn');
    }
    * xuu() {
      return yield app.curl('http://www.sina.com.con');
    }
    * dxx() {
      return yield app.curl('http://www.sina.com.con');
    }
  }
  return Pp;
};
