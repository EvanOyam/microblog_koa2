/*
 * @Author: Evan
 * @Date: 2020-01-19 16:29:27
 * @Last Modified by: Evan
 * @Last Modified time: 2020-02-03 17:44:24
 * @Description: 数据库配置文件
 */

const { isProd } = require('../utils/env')

let MYSQL_CONF = {
  host: 'localhost',
  user: 'root',
  password: 'Evan2020',
  port: '3306',
  database: 'koa2_blog_db'
}

let REDIS_CONF = {
  port: '6379',
  host: '127.0.0.1'
}

// 生产环境配置
if (isProd) {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'Evan2019',
    port: '3306',
    database: 'koa2_blog'
  }
  REDIS_CONF = {
    port: '6379',
    host: '127.0.0.1'
  }
}

module.exports = {
  MYSQL_CONF,
  REDIS_CONF
}
