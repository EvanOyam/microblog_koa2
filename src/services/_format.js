/*
 * @Author: Evan
 * @Date: 2020-02-12 16:37:02
 * @Last Modified by: Evan
 * @Last Modified time: 2020-02-15 22:35:32
 * @Description: 格式化结构，添加默认数据
 */

const { DEFAULT_PICTRUE } = require('../conf/constant')

/**
 * 格式化用户信息
 * @param {Object} obj 用户对象
 */
function _formatUserPicture(obj) {
  if (obj.picture == null) {
    obj.picture = DEFAULT_PICTRUE
  }
  return obj
}

/**
 * 格式化用户信息
 * @param {Object|Array} list 用户列表或单个对象
 */
function formatUser(list) {
  // 异常处理
  if (list == null) {
    return list
  }
  if (Array.isArray(list)) {
    return list.map(_formatUserPicture)
  }
  return _formatUserPicture(list)
}

module.exports = {
  formatUser
}
