/*
 * @Author: Evan
 * @Date: 2020-03-12 15:58:39
 * @Last Modified by: Evan
 * @Last Modified time: 2020-03-12 16:05:45
 * @Description 博客首页api
 */

const router = require('koa-router')()
const { loginCheck } = require('../../middlewares/loginCheck')
const { create } = require('../../controller/blogHome')

router.prefix('/api/blog')

// 创建微博
router.post('/create', loginCheck, async ctx => {
  const { content, image } = ctx.request.body
  const { id: userId } = ctx.session.userInfo
  ctx.body = await create({ userId, content, image })
})

module.exports = router
