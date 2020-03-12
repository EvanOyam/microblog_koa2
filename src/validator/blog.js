/*
 * @Author: Evan
 * @Date: 2020-03-12 18:26:45
 * @Last Modified by: Evan
 * @Last Modified time: 2020-03-12 18:27:10
 * @Description: 微博格式校验
 */

const validate = require('./_validate')

// 校验规则
const SCHEMA = {
  type: 'object',
  properties: {
    content: {
      type: 'string'
    },
    image: {
      type: 'string',
      maxLength: 255
    }
  }
}

/**
 * 校验微博数据格式
 * @param {Object} data 微博数据
 */
function blogValidate(data = {}) {
  return validate(SCHEMA, data)
}

module.exports = blogValidate
