/*
 * @Author: Evan
 * @Date: 2020-02-01 18:17:15
 * @Last Modified by: Evan
 * @Last Modified time: 2020-02-01 18:23:01
 * @Description: http单元测试
 */

const server = require('./server.js')

test('http单元测试', async () => {
  const res = await server.get('/json')
  expect(res.body).toEqual({
    title: 'koa2 json'
  })
})
