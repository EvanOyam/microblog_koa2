/*
 * @Author: Evan
 * @Date: 2020-02-01 18:14:25
 * @Last Modified by: Evan
 * @Last Modified time: 2020-02-01 18:21:03
 * @Description: http测试
 */

const request = require('supertest')
const server = require('../src/app.js').callback()

module.exports = request(server)
