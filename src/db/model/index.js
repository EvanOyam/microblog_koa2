/*
 * @Author: Evan
 * @Date: 2020-02-06 19:55:32
 * @Last Modified by: Evan
 * @Last Modified time: 2020-03-12 10:37:28
 * @Description: 数据模型入口文件
 */

const User = require('./User')
const Blog = require('./Blog')

Blog.belongsTo(User, {
  foreignKey: 'userId'
})

module.exports = {
  User,
  Blog
}
