/*
 * @Author: Evan
 * @Date: 2020-02-28 11:27:34
 * @Last Modified by: Evan
 * @Last Modified time: 2020-02-28 14:45:13
 * @Description: 登录验证中间件
 */
const { ErrorModel } = require('../model/ResModel')
const { loginCheckFailInfo } = require('../model/ErrorInfo')

/**
 * api 登录验证
 * @param {Object} ctx
 * @param {Function} next
 */
async function loginCheck(ctx, next) {
  // 已登录
  if (ctx.session && ctx.session.userInfo) {
    await next()
    return
  }
  // 未登录
  ctx.body = new ErrorModel(loginCheckFailInfo)
}

/**
 * 登录后页面重定向
 * @param {Object} ctx
 * @param {Function} next
 */
async function loginRedirect(ctx, next) {
  // 已登录
  if (ctx.session && ctx.session.userInfo) {
    await next()
    return
  }
  // 未登录
  const curUrl = ctx.url
  ctx.redirect(`/login?url=${encodeURIComponent(curUrl)}`)
}

module.exports = {
  loginCheck,
  loginRedirect
}
