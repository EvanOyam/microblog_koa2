/*
 * @Author: Evan
 * @Date: 2020-02-10 21:39:08
 * @Last Modified by: Evan
 * @Last Modified time: 2020-02-15 16:12:07
 * @Description: 用户注册路由
 */

const router = require('koa-router')()
const { isExist } = require('../../controller/user')
router.prefix('/api/user')
router.post('/register', async () => {})

router.post('/isExist', async ctx => {
  const { userName } = ctx.request.body
  console.log('userName', userName)
  ctx.body = await isExist(userName)
})

module.exports = router
