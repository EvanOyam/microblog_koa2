/*
 * @Author: Evan
 * @Date: 2020-03-12 16:39:31
 * @Last Modified by: Evan
 * @Last Modified time: 2020-03-12 16:43:45
 * @Description: 博客相关services
 */

const { Blog } = require('../db/model/index')

async function createBlog({ userId, content, image }) {
  const result = await Blog.create({
    userId,
    content,
    image
  })
  return result.dataValues
}

module.exports = {
  createBlog
}
