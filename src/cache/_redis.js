/*
 * @Author: Evan
 * @Date: 2020-01-19 16:34:35
 * @Last Modified by: Evan
 * @Last Modified time: 2020-01-20 18:18:49
 * @Description: 链接redis的方法
 */

const redis = require('redis')
const { REDIS_CONF } = require('../conf/db')
const { host, port } = REDIS_CONF

// 创建客户端
const redisClient = redis.createClient(port, host)
redisClient.on('error', err => {
  console.error('Redis Error!', err)
})

/**
 *
 * @param {string} key 键
 * @param {string} val 值
 * @param {number} timeout 过期时间，单位是秒，默认1小时
 */
function set(key, val, timeout = 60 * 60) {
  if (typeof val === 'object') {
    val = JSON.stringify(val)
  }
  redisClient.set(key, val)
  redisClient.expire(key, timeout)
}

function get(key) {
  return new Promise((resolve, reject) => {
    redisClient.get(key, (err, val) => {
      if (err) {
        reject(err)
        return
      }
      if (val == null) {
        resolve(null)
        return
      }
      try {
        resolve(JSON.parse(val))
      } catch (err) {
        resolve(val)
      }
    })
  })
}

module.exports = {
  set,
  get
}
