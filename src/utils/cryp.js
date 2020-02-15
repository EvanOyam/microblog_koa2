/*
 * @Author: Evan
 * @Date: 2020-02-15 23:51:54
 * @Last Modified by: Evan
 * @Last Modified time: 2020-02-16 00:05:43
 * @Description: 明文md5加密
 */

const crypto = require('crypto')
const { CRYPTO_SECRET_KEY } = require('../conf/secretKeys')

/**
 * 加密工具
 * @param {string} content 明文
 */
function _md5(content) {
  const md5 = crypto.createHash('md5')
  return md5.update(content).digest('hex')
}

/**
 * 加密规则
 * @param {string} content 明文
 */
function doCrypto(content) {
  const str = `password=${content}&key=${CRYPTO_SECRET_KEY}`
  return _md5(str)
}

module.exports = doCrypto
