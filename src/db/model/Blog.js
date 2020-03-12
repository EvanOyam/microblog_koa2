/*
 * @Author: Evan
 * @Date: 2020-03-12 10:34:31
 * @Last Modified by: Evan
 * @Last Modified time: 2020-03-12 10:38:14
 * @Description: 微博数据模型
 */

const seq = require('../seq')
const { INTEGER, STRING, TEXT } = require('../type')

const Blog = seq.define('blog', {
  userId: {
    type: INTEGER,
    allowNull: false,
    comment: '用户 ID'
  },
  content: {
    type: TEXT,
    allowNull: false,
    comment: '微博内容'
  },
  image: {
    type: STRING,
    comment: '图片地址'
  }
})

module.exports = Blog
