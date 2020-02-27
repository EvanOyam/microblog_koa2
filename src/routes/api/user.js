/*
 * @Author: Evan
 * @Date: 2020-02-10 21:39:08
 * @Last Modified by: Evan
 * @Last Modified time: 2020-02-27 15:26:46
 * @Description: 用户注册路由
 */

const router = require('koa-router')()
const { isExist, register } = require('../../controller/user')
// 用户信息校验相关中间件
const { genValidator } = require('../../middlewares/validator')
const userValidateFn = require('../../validator/user')
router.prefix('/api/user')
router.post('/register', genValidator(userValidateFn), async ctx => {
  const { userName, password, gender } = ctx.request.body
  ctx.body = await register({ userName, password, gender })
})

router.post('/isExist', async ctx => {
  const { userName } = ctx.request.body
  ctx.body = await isExist(userName)
})

module.exports = router
