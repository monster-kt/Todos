/*
 * @description:添加任务功能模块
 * @version:1.0
 * @Date: 2021-04-12 15:20:28
 * @LastEditors: surui
 * @LastEditTime: 2021-04-12 17:01:06
 * @FilePath: \VSwork\Ajax\todo\route\todo\add.js
*/
const Task = require('../../model/task');
const Joi = require("joi");

module.exports = async (req, res) => {
    const title = req.body.title;
    // 验证规则
    const taskSchema = Joi.object({
        title: Joi.string().required().min(1).max(50),

    });
    // 验证
    try {
        await taskSchema.validateAsync({ title });
    }
    catch (err) {
        return res.status(400).send('验证失败')
    }
    const newTask = await Task.create({
        title
    });
    // 响应
    res.send(newTask);
}