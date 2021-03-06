const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const session = require('koa-generic-session')
const redisStore = require('koa-redis')
const { REDIS_CONF } = require('./conf/db')
const { SESSION_SECRET_KEY } = require('./conf/secretKeys')
const { isProd } = require('./utils/env')
const koaStatic = require('koa-static')
const path = require('path')

// 路由
const userViewRouter = require('./routes/view/user')
const blogViewRouter = require('./routes/view/blog')
const blogHomeAPIRouter = require('./routes/api/blogHome')
const userAPIRouter = require('./routes/api/user')
const errorViewRouter = require('./routes/view/error')
const utilsAPIRouter = require('./routes/api/utils')

// error handler, 捕获到错误时重定向去错误页
let onerrorConf = {}
if (isProd) {
  onerrorConf = {
    redirect: '/error'
  }
}
onerror(app, onerrorConf)

// middlewares
app.use(
  bodyparser({
    enableTypes: ['json', 'form', 'text']
  })
)
app.use(json())
app.use(logger())
app.use(koaStatic(__dirname + '/public'))
app.use(koaStatic(path.join(__dirname, '../uploadFiles')))

app.use(
  views(__dirname + '/views', {
    extension: 'ejs'
  })
)

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// session配置
app.keys = [SESSION_SECRET_KEY] // 用于加密cookie
app.use(
  session({
    key: 'weibo.sid', // cookie名称
    prefix: 'weibo:sess:', // 日志前缀
    cookie: {
      path: '/',
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 3600 // 单位ms
    },
    store: redisStore({
      all: `${REDIS_CONF.host}:${REDIS_CONF.port}`
    })
  })
)

// routes
app.use(userViewRouter.routes(), userViewRouter.allowedMethods())
app.use(blogViewRouter.routes(), blogViewRouter.allowedMethods())
app.use(blogHomeAPIRouter.routes(), blogHomeAPIRouter.allowedMethods())
app.use(userAPIRouter.routes(), userAPIRouter.allowedMethods())
app.use(utilsAPIRouter.routes(), utilsAPIRouter.allowedMethods())
app.use(errorViewRouter.routes(), errorViewRouter.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

module.exports = app
