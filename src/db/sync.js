/*
 * @Author: Evan
 * @Date: 2020-02-03 21:54:58
 * @Last Modified by: Evan
 * @Last Modified time: 2020-02-03 21:55:34
 * @Description: sequelize 同步
 */
const seq = require('./seq')

// 连接测试
seq
  .authenticate()
  .then(() => {
    console.log('connection succeeded')
  })
  .catch(err => {
    console.log('connection failed! ======>', err)
  })

seq.sync({ force: true }).then(() => {
  console.log('sync succeeded')
  process.exit()
})
