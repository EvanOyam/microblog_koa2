/*
 * @Author: Evan
 * @Date: 2020-02-10 21:56:53
 * @Last Modified by: Evan
 * @Last Modified time: 2020-02-15 23:58:12
 * @Description: 登陆注册业务逻辑
 */

const { getUserInfo, createUser } = require('../services/user')
const { SuccessModel, ErrorModel } = require('../model/ResModel')
const {
  userNameExist,
  registerUserNameExistInfo,
  registerFailInfo
} = require('../model/ErrorInfo')
const doCrypto = require('../utils/cryp')

/**
 * 用户名是否存在
 * @param {String} 用户名
 */
async function isExist(userName) {
  const userInfo = await getUserInfo(userName)
  if (userInfo) {
    return new SuccessModel(userInfo)
  } else {
    return new ErrorModel(userNameExist)
  }
}

/**
 * 注册逻辑
 * @param {*} userName 用户名
 * @param {*} password 密码
 * @param {*} gender 性别
 */
async function register({ userName, password, gender }) {
  const userInfo = await getUserInfo(userName)
  if (userInfo) {
    // 用户名已存在
    return ErrorModel(registerUserNameExistInfo)
  }
  try {
    await createUser({
      userName,
      password: doCrypto(password),
      gender
    })
    return new SuccessModel()
  } catch (error) {
    console.error(error.message, error.stack)
    return new ErrorModel(registerFailInfo)
  }
}

module.exports = {
  isExist,
  register
}
