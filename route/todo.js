/*
 * @description:主路由
 * @version:1.0
 * @Date: 2021-04-12 14:48:56
 * @LastEditors: surui
 * @LastEditTime: 2021-04-12 22:33:33
 * @FilePath: \VSwork\Ajax\todo\route\todo.js
 */
const express = require('express');

const todo = express.Router();

// 获取任务列表
todo.get('/task', require('./todo/task'));
// 添加任务
todo.post('/addTask', require('./todo/add'));
// 删除任务
todo.get('/deleteTask', require('./todo/delete'));
// 修改状态
todo.post('/modifyTask', require('./todo/modify'));
// 删除所有已完成的任务
todo.get('/clearTask', require('./todo/clearTask'));
module.exports = todo;