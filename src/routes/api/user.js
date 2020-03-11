/*
 * @Author: Evan
 * @Date: 2020-02-10 21:39:08
 * @Last Modified by: Evan
 * @Last Modified time: 2020-03-11 15:56:33
 * @Description: 用户注册路由
 */

const router = require('koa-router')()
const {
  isExist,
  register,
  login,
  deleteTestUser,
  changeInfo
} = require('../../controller/user')
const { isTest } = require('../../utils/env')
// 用户信息校验相关中间件
const { genValidator } = require('../../middlewares/validator')
const userValidateFn = require('../../validator/user')
const { loginCheck } = require('../../middlewares/loginCheck')
router.prefix('/api/user')
router.post('/register', genValidator(userValidateFn), async ctx => {
  const { userName, password, gender } = ctx.request.body
  ctx.body = await register({ userName, password, gender })
})

router.post('/isExist', async ctx => {
  const { userName } = ctx.request.body
  ctx.body = await isExist(userName)
})

router.post('/login', async ctx => {
  const { userName, password } = ctx.request.body
  ctx.body = await login(ctx, userName, password)
})

router.post('/delete', loginCheck, async ctx => {
  if (isTest) {
    const userName = ctx.session.userInfo.userName
    ctx.body = await deleteTestUser(userName)
  }
})

// 修改个人信息
router.patch(
  '/changeInfo',
  loginCheck,
  genValidator(userValidateFn),
  async ctx => {
    const { nickName, city, picture } = ctx.request.body
    ctx.body = await changeInfo(ctx, { nickName, city, picture })
  }
)

module.exports = router
