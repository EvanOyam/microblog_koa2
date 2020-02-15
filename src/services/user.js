/*
 * @Author: Evan
 * @Date: 2020-02-10 22:02:28
 * @Last Modified by: Evan
 * @Last Modified time: 2020-02-12 16:51:45
 * @Description: 用户表相关操作
 */

const { User } = require('../db/model/index')
const { formatUser } = require('./_format')

async function getUserInfo(userName, password) {
  let whereOpt = {
    userName
  }
  if (password) {
    whereOpt = { ...whereOpt, password }
  }
  const result = await User.findOne({
    where: whereOpt
  })

  if (result == null) {
    return
  }
  // 格式化
  const res = formatUser(result.dataValues)
  return res
}

module.exports = {
  getUserInfo
}
