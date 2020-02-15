/*
 * @Author: Evan
 * @Date: 2020-02-10 21:56:53
 * @Last Modified by: Evan
 * @Last Modified time: 2020-02-12 18:03:04
 * @Description: 登陆注册业务逻辑
 */

const { getUserInfo } = require('../services/user')
const { SuccessModel, ErrorModel } = require('../model/ResModel')
const { userNameExist } = require('../model/ErrorInfo')

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

module.exports = {
  isExist
}
