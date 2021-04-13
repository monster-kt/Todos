/*
 * @description:获取任务列表
 * @version:1.0
 * @Date: 2021-04-12 14:50:33
 * @LastEditors: surui
 * @LastEditTime: 2021-04-12 16:58:46
 * @FilePath: \VSwork\Ajax\todo\route\todo\task.js
*/
const Task = require('../../model/task');
module.exports = async (req, res) => {
    const task = await Task.find();
    res.send(task);
}