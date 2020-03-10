/*
 * @Author: Evan
 * @Date: 2020-02-06 19:22:03
 * @Last Modified by: Evan
 * @Last Modified time: 2020-03-10 11:11:32
 * @Description: 登陆 / 注册页面
 */

const router = require('koa-router')()
const { loginRedirect } = require('../../middlewares/loginCheck')

/**
 * 获取登录信息
 * @param {Object} ctx
 */
function getLoginInfo(ctx) {
  let data = {
    isLogin: false
  }
  if (ctx.session.userInfo) {
    data = {
      isLogin: true,
      userName: ctx.session.userInfo.userName
    }
  }
  return data
}

router.get('/login', async ctx => {
  await ctx.render('login', getLoginInfo(ctx))
})

router.get('/register', async ctx => {
  await ctx.render('register', getLoginInfo(ctx))
})

router.get('/setting', loginRedirect, async ctx => {
  await ctx.render('setting', ctx.session.userInfo)
})

module.exports = router
