/*
 * @Author: Evan
 * @Date: 2020-03-10 14:03:16
 * @Last Modified by: Evan
 * @Last Modified time: 2020-03-10 16:29:42
 * @Description: utils 业务逻辑
 */

const path = require('path')
const { ErrorModel, SuccessModel } = require('../model/ResModel')
const { uploadFileSizeFailInfo } = require('../model/ErrorInfo')
const fse = require('fs-extra')

// 文件存储路径
const DIST_FOLDER_PATH = path.join(__dirname, '../../uploadFiles')

// 最大体积 1M
const MAX_SIZE = 1024 * 1024 * 1024

// 是否需要创建目录
fse.pathExists(DIST_FOLDER_PATH).then(exist => {
  if (!exist) {
    fse.ensureDir(DIST_FOLDER_PATH)
  }
})

/**
 * 保存图片
 * @param {String} name 文件名
 * @param {String} type 文件类型
 * @param {Number} size 文件体积大小
 * @param {String} filePath 文件路径
 */
async function saveFile({ name, type, size, filePath }) {
  if (size > MAX_SIZE) {
    await fse.remove(filePath)
    return new ErrorModel(uploadFileSizeFailInfo)
  }

  // 移动文件，经过koaForm中间件之后，文件已经在服务器中了，但是移动到指定目录比较好管理
  const fileName = +new Date() + '_' + name
  const distFilePath = path.join(DIST_FOLDER_PATH, fileName)
  await fse.move(filePath, distFilePath)

  return new SuccessModel({
    url: '/' + fileName
  })
}

module.exports = {
  saveFile
}
