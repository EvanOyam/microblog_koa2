/*
 * @Author: Evan
 * @Date: 2020-02-01 17:57:40
 * @Last Modified by: Evan
 * @Last Modified time: 2020-02-01 18:00:48
 * @description: test demo
 */

function sum(a, b) {
  return a + b
}

test('test demo 1', () => {
  const res = sum(10, 20)
  expect(res).toBe(30)
})
