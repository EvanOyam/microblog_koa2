/*
 * @Author: Evan
 * @Date: 2020-02-06 19:22:03
 * @Last Modified by: Evan
 * @Last Modified time: 2020-02-06 19:23:54
 * @Description: 登陆 / 注册页面
 */

const router = require('koa-router')()

router.get('/login', async ctx => {
  await ctx.render('login', {})
})

router.get('/register', async ctx => {
  await ctx.render('register', {})
})

module.exports = router
