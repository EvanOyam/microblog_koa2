/*
 * @Author: Evan
 * @Date: 2020-03-12 15:04:42
 * @Last Modified by: Evan
 * @Last Modified time: 2020-03-12 15:11:13
 * @Description: 博客页面
 */

const router = require('koa-router')()
const { loginRedirect } = require('../../middlewares/loginCheck')

router.get('/', loginRedirect, async ctx => {
  await ctx.render('index', {})
})

module.exports = router
