/*
 * @Author: Evan
 * @Date: 2020-02-10 22:02:28
 * @Last Modified by: Evan
 * @Last Modified time: 2020-03-11 16:07:00
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

/**
 *
 * @param {Object} param0 需要修改的信息
 * @param {Object} param1 查询条件
 */
async function updateUser(
  { newPassword, newNickName, newPicture, newCity },
  { userName, password }
) {
  // 拼接修改内容
  let updateData = {}
  if (newPassword) {
    updateData.password = newPassword
  }
  if (newNickName) {
    updateData.nickName = newNickName
  }
  if (newPicture) {
    updateData.picture = newPicture
  }
  if (newCity) {
    updateData.city = newCity
  }

  // 拼接查询条件
  let whereData = {
    userName
  }
  if (password) {
    whereData.password = password
  }

  // 执行修改
  const result = await User.update(updateData, {
    where: whereData
  })
  return result[0] > 0 // 修改的行数
}

module.exports = {
  getUserInfo,
  createUser,
  deleteUser,
  updateUser
}
