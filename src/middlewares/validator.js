/*
 * @Author: Evan
 * @Date: 2020-02-27 15:10:38
 * @Last Modified by: Evan
 * @Last Modified time: 2020-02-27 16:00:51
 * @Description: json schema 校验中间件
 */

const { ErrorModel } = require('../model/ResModel')
const { jsonSchemaFileInfo } = require('../model/ErrorInfo')

/**
 * 生成 json schema 验证的中间件
 * @param {function} validateFn 接收验证函数
 */
function genValidator(validateFn) {
  async function validator(ctx, next) {
    const data = ctx.request.body
    const error = validateFn(data)
    if (error) {
      // 验证失败
      ctx.body = new ErrorModel(jsonSchemaFileInfo)
      return
    }
    await next()
  }
  return validator
}

module.exports = { genValidator }
