/*
 * @Author: Evan
 * @Date: 2020-02-10 22:02:28
 * @Last Modified by: Evan
 * @Last Modified time: 2020-02-28 17:51:08
 * @Description: 用户表相关操作
 */

const { User } = require('../db/model/index')
const { formatUser } = require('./_format')

/**
 * 获取用户信息
 * @param {*} userName 用户名
 * @param {*} password 密码
 */
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

/**
 * 创建用户
 * @param {*} userName 用户名
 * @param {*} password 密码
 * @param {*} gender 性别，默认保密
 * @param {*} nickName 昵称，默认空
 */
async function createUser({
  userName,
  password,
  gender = 3,
  nickName = userName
}) {
  const result = await User.create({
    userName,
    password,
    gender,
    nickName
  })
  return result.dataValues
}

async function deleteUser(userName) {
  const result = await User.destroy({
    where: {
      userName
    }
  })
  return result > 0
}

module.exports = {
  getUserInfo,
  createUser,
  deleteUser
}
