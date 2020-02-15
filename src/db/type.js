/*
 * @Author: Evan
 * @Date: 2020-02-06 19:40:07
 * @Last Modified by: Evan
 * @Last Modified time: 2020-02-06 19:42:08
 * @Description: 数据库数据类型
 */

const Sequelize = require('sequelize')

module.exports = {
  STRING: Sequelize.STRING,
  DECIMAL: Sequelize.DECIMAL,
  TEXT: Sequelize.TEXT,
  INTEGER: Sequelize.INTEGER,
  BOOLEAN: Sequelize.BOOLEAN
}
