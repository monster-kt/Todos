/*
 * @description:入口文件
 * @version:1.0
 * @Date: 2021-04-11 16:19:45
 * @LastEditors: surui
 * @LastEditTime: 2021-04-13 20:08:27
 * @FilePath: \VSwork\Ajax\todo\app.js
*/
// 引入框架
const express = require('express');
// 引入第三方模块
const template = require('express-art-template');
const bodyParser = require('body-parser');
// 引入系统模块
const path = require('path');
const todo = require('./route/todo');

// 数据库连接
require('./model/connect');

// 创建网站服务器
const app = express();

// 配置静态资源目录路径
app.use(express.static(path.join(__dirname, 'public')));

// 配置 post 请求参数
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use('/todo', todo);

app.listen(3000);
console.log('服务器启动成功');