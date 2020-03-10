/*
 * @Author: Evan
 * @Date: 2020-03-10 11:50:25
 * @Last Modified by: Evan
 * @Last Modified time: 2020-03-10 16:20:13
 * @Description: utils api 路由
 */

const router = require('koa-router')()
const { loginCheck } = require('../../middlewares/loginCheck')
const { saveFile } = require('../../controller/utils')
const koaForm = require('formidable-upload-koa')

router.prefix('/api/utils')

router.post('/upload', loginCheck, koaForm(), async ctx => {
  // koaForm中间件处理过后的file
  const file = ctx.req.files['file']
  const { size, path, name, type } = file
  ctx.body = await saveFile({ size, filePath: path, name, type })
})

module.exports = router
