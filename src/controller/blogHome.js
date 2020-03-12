/*
 * @Author: Evan
 * @Date: 2020-03-12 16:03:59
 * @Last Modified by: Evan
 * @Last Modified time: 2020-03-12 16:46:52
 * @Description: 微博首页 controller
 */

const { createBlog } = require('../services/blog')
const { SuccessModel, ErrorModel } = require('../model/ResModel')
const { createBlogFailInfo } = require('../model/ErrorInfo')

/**
 * 创建微博
 * @param {Object} param0 创建微博所需的参数
 */
async function create({ userId, content, image }) {
  try {
    const result = await createBlog({ userId, content, image })
    return new SuccessModel(result)
  } catch (error) {
    console.error(error.message, error.stack)
    return new ErrorModel(createBlogFailInfo)
  }
}

module.exports = {
  create
}
