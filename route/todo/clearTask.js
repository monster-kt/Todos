/*
 * @description:删除所有已完成的任务
 * @version:1.0
 * @Date: 2021-04-12 22:33:35
 * @LastEditors: surui
 * @LastEditTime: 2021-04-12 22:35:14
 * @FilePath: \VSwork\Ajax\todo\route\todo\clearTask.js
*/
const Task = require('../../model/task');
module.exports = async (req, res) => {
    const result = await Task.deleteMany({ completed: true });
    res.send(result);
}
