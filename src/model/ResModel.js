/*
 * @Author: Evan
 * @Date: 2020-02-12 17:04:29
 * @Last Modified by: Evan
 * @Last Modified time: 2020-02-12 17:09:51
 * @Description: 返回格式的模型
 */

class BaseModel {
  constructor({ errno, data, message }) {
    this.errno = errno
    if (data) {
      this.data = data
    }
    if (message) {
      this.message = message
    }
  }
}

class SuccessModel extends BaseModel {
  constructor(data = {}) {
    super({ errno: 0, data })
  }
}

class ErrorModel extends BaseModel {
  constructor({ errno, message }) {
    super({
      errno,
      message
    })
  }
}

module.exports = {
  SuccessModel,
  ErrorModel
}
