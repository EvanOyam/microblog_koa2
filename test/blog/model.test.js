/*
 * @Author: Evan
 * @Date: 2020-03-13 14:08:04
 * @Last Modified by: Evan
 * @Last Modified time: 2020-03-13 14:08:32
 * @Description: 博客模型单元测试
 */

const { Blog } = require('../../src/db/model/index')

test('微博数据模型各个属性，符合预期', () => {
  const blog = Blog.build({
    userId: 1,
    content: '微博内容',
    image: '/test.png'
  })
  expect(blog.userId).toBe(1)
  expect(blog.content).toBe('微博内容')
  expect(blog.image).toBe('/test.png')
})
