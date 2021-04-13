/*
 * @description: 数据库的连接与设置
 * @version: 1.0
 * @Date: 2021-04-11 16:24:46
 * @LastEditors: surui
 * @LastEditTime: 2021-04-12 19:46:44
 * @FilePath: \VSwork\Ajax\todo\model\connect.js
 */
const mongoose = require('mongoose');

mongoose.connect('mongodb://todo:123456@localhost:27017/todo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('数据库连接成功'))
    .catch((err) => console.log('数据库连接失败', err));