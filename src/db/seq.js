const Sequelize = require('sequelize')
const { MYSQL_CONF } = require('../conf/db')
const { host, user, password, database } = MYSQL_CONF
const { isProd, isTest } = require('../utils/env')

const conf = {
  host,
  dialect: 'mysql'
}

// 跑单元测试时不输出sequelize日志，置空函数
if (isTest) {
  conf.logging = () => {}
}

// 生产环境使用连接池
if (isProd) {
  conf.pool = {
    max: 5,
    min: 0,
    idle: 1000
  }
}

const seq = new Sequelize(database, user, password, conf)

module.exports = seq
