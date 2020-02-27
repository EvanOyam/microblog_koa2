/*
 * @Author: Evan
 * @Date: 2020-02-27 15:12:32
 * @Last Modified by: Evan
 * @Last Modified time: 2020-02-27 15:16:31
 * @Description: json schema校验
 */

const Ajv = require('ajv')
const ajv = new Ajv({})

/**
 *
 * @param {Object} schema 校验的规则
 * @param {Object} data 需要校验的数据
 */
function validate(schema, data = {}) {
  // 如果匹配不成功，会返回一个错误信息
  const valid = ajv.validate(schema, data)
  if (!valid) {
    return ajv.errors[0]
  }
}

module.exports = validate
