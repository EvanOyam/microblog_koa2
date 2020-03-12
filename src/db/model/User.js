/*
 * @Author: Evan
 * @Date: 2020-02-06 19:46:07
 * @Last Modified by: Evan
 * @Last Modified time: 2020-03-11 18:04:09
 * @Description: 用户表
 */

const seq = require('../seq')
const { STRING, DECIMAL } = require('../type')

const User = seq.define('user', {
  userName: {
    type: STRING,
    allowNull: false,
    unique: true,
    comment: '用户名，唯一'
  },
  password: {
    type: STRING,
    allowNull: false,
    comment: '密码'
  },
  nickName: {
    type: STRING,
    allowNull: false,
    comment: '昵称'
  },
  gender: {
    type: DECIMAL,
    allowNull: false,
    defaultValue: 3,
    comment: '性别，1男性，2女性，3保密'
  },
  picture: {
    type: STRING,
    comment: '头像，图片地址'
  },
  city: {
    type: STRING,
    comment: '城市'
  }
})

module.exports = User
