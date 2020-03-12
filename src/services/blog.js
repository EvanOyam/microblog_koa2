/*
 * @Author: Evan
 * @Date: 2020-03-12 16:39:31
 * @Last Modified by: Evan
 * @Last Modified time: 2020-03-12 18:18:47
 * @Description: 博客相关services
 */

const { Blog } = require('../db/model/index')
const xss = require('xss')

async function createBlog({ userId, content, image }) {
  const result = await Blog.create({
    userId,
    content: xss(content),
    image
  })
  return result.dataValues
}

module.exports = {
  createBlog
}
