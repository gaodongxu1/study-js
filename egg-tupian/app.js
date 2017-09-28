'use strict';
const knex = require('knex')({
  client: 'mysql',
});
module.exports = app => {
  app.beforeStart(function* () {
    const ctx = app.createAnonymousContext();
    const hasUser = yield app.mysql.query(knex.schema.hasTable('user').toString());
    ctx.logger.error('e');
    // ctx.logger.info('a');
    if (hasUser.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('user', function(table) {
        table.increments();
        table.string('微信号').notNullable().defaultTo('');
        table.integer('作品ID').notNullable().defaultTo('');
        table.integer('手机号').notNullable().defaultTo('');
        table.integer('上传时间').notNullable().defaultTo('');
        table.integer('投票次数').notNullable().defaultTo('');
        table.integer('用户状态').notNullable().defaultTo('');
        table.timestamp('creat_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(userSchema.toString());
      yield this.ctx.helper.unique(app, 'tupian', '微信号');
      yield this.ctx.helper.unique(app, 'tupian', '作品ID');
      yield this.ctx.helper.unique(app, 'tupian', '手机号');
      yield this.ctx.helper.unique(app, 'tupian', '微信号');
      // yield this.ctx.helper.unique(app.'use')
    }
  });
};
