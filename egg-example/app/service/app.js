'use strict';
module.exports = app => {
  class Ab extends app.Service {
    * ab() {
      return yield app.curl('http://www.sina.com.cn');
    }
  }
  return Ab;
};
