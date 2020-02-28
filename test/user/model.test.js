/*
 * @Author: Evan
 * @Date: 2020-02-28 16:55:19
 * @Last Modified by:   Evan
 * @Last Modified time: 2020-02-28 16:55:19
 * @Description: 用户模型单元测试
 */

const { User } = require('../../src/db/model/index')
test('User模型通过测试', () => {
  const user = User.build({
    userName: 'Evan',
    password: 'p123123',
    nickName: 'Evan',
    picture: '/xxx.png',
    city: '深圳'
  })
  expect(user.userName).toBe('Evan')
  expect(user.password).toBe('p123123')
  expect(user.nickName).toBe('Evan')
  expect(user.gender).toBe(3)
  expect(user.picture).toBe('/xxx.png')
  expect(user.city).toBe('深圳')
})
