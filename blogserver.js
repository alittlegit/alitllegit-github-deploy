/*
 * 功能：hexo io 托管静态资源
 * 说明：自测使用，在服务器上需要自己提供server
 */

const express = require('express') //yarn add express
const app = express();

//process.env.NODE_ENV=require('env.js')  //export NODE_ENV='development' /'production'

// app.get('/', (req, res, next) => {
//         console.log('正常访问...');
//         next()
// })
// 挂载内置中间件
app.use(express.static('public')) //静态资源托管


let server = app.listen(6666, () => {
    console.log('listening 6666')
})