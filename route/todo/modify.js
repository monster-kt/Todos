/*
 * @description:修改任务模块
 * @version:1.0
 * @Date: 2021-04-12 19:16:45
 * @LastEditors: surui
 * @LastEditTime: 2021-04-12 20:37:13
 * @FilePath: \VSwork\Ajax\todo\route\todo\modify.js
*/
const Task = require('../../model/task');
const Joi = require("joi");
module.exports = async (req, res) => {
    const { _id, title, status } = req.body;
    const taskSchema = Joi.object({
        _id: Joi.string().required().regex(/^[0-9a-fA-F]{24}$/)
    });
    try {
        await taskSchema.validateAsync({ _id });
    } catch (error) {
        return res.send('_id属性不正确，可能被修改');
    }
    if (title) {
        await Task.updateOne({ _id }, { title });
        res.send({ _id, title });
    } else {
        await Task.updateOne({ _id }, { completed: status });
        res.send({ _id, status });
    }

}
