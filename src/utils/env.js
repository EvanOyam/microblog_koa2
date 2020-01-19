/*
 * @Author: Evan
 * @Date: 2020-01-19 16:39:00
 * @Last Modified by:   Evan
 * @Last Modified time: 2020-01-19 16:39:00
 * @Description: 环境配置文件
 */
const ENV = process.env.NODE_ENV

module.exports = {
  isProd: ENV === 'production',
  isDev: ENV === 'dev'
}
