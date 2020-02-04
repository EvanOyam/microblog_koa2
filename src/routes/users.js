const router = require('koa-router')()

router.prefix('/users')

router.get('/', function(ctx) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function(ctx) {
  ctx.body = 'this is a users/bar response'
})

// todo 测试代码
router.post('/userinfo', async ctx => {
  const { userName, password } = ctx.request.body
  ctx.body = {
    tag: 100,
    userName,
    password
  }
})

module.exports = router
