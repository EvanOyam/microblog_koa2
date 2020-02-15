/*
 * @Author: Evan
 * @Date: 2020-02-10 21:39:08
 * @Last Modified by: Evan
 * @Last Modified time: 2020-02-15 16:41:49
 * @Description: 用户注册路由
 */

const router = require('koa-router')()
const { isExist, register } = require('../../controller/user')
router.prefix('/api/user')
router.post('/register', async ctx => {
  const { userName, password, gender } = ctx.request.body
  ctx.body = await register({ userName, password, gender })
})

router.post('/isExist', async ctx => {
  const { userName } = ctx.request.body
  ctx.body = await isExist(userName)
})

module.exports = router
