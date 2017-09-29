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
        table.integer('作品ID').notNullable().defaultTo();
        table.integer('手机号').notNullable().defaultTo();
        table.integer('投票次数').notNullable().defaultTo(0);
        table.integer('用户状态').notNullable().defaultTo(0);
        table.timestamp('creat_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(userSchema.toString());
      // yield ctx.helper.unique(app, 'user', '微信号');
      // yield ctx.helper.unique(app, 'user', '作品ID');
      // yield ctx.helper.unique(app, 'user', '手机号');
      // yield this.ctx.helper.unique(app.'use')
    }
    const hasWorks = yield app.mysql.query(knex.schema.hasTable('works').toString());
    ctx.logger.error('e');
    // ctx.logger.info('a');
    if (hasWorks.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('works', function(table) {
        table.increments();
        table.string('微信号').notNullable().defaultTo('');
        table.integer('作品ID').notNullable().defaultTo();
        table.string('型号').notNullable().defaultTo('');
        table.integer('票数').notNullable().defaultTo('0');
        table.integer('作品状态').notNullable().defaultTo(0);
        // table.integer('URL').notNullable().defaultTo(0);
        table.timestamp('creat_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(userSchema.toString());
      // yield ctx.helper.unique(app, 'tupian', '微信号');
      // yield ctx.helper.unique(app, 'tupian', '作品ID');
      // yield ctx.helper.unique(app, 'tupian', '手机号');
      // yield ctx.helper.unique(app, 'tupian', '微信号');
    }
  });
};
