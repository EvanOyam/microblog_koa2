/*
 * @Author: Evan
 * @Date: 2020-02-04 12:57:09
 * @Last Modified by: Evan
 * @Last Modified time: 2020-02-04 12:57:29
 * @Description: 404与错误处理
 */
const router = require('koa-router')()

router.get('/error', async ctx => {
  await ctx.render('error')
})

router.get('*', async ctx => {
  await ctx.render('404')
})

module.exports = router
