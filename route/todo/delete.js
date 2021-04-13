/*
 * @description:
 * @version:1.0
 * @Date: 2021-04-12 16:14:03
 * @LastEditors: surui
 * @LastEditTime: 2021-04-12 19:19:08
 * @FilePath: \VSwork\Ajax\todo\route\todo\delete.js
*/
const Task = require('../../model/task');
const Joi = require("joi");
module.exports = async (req, res) => {
    const _id = req.query.id;
    const taskSchema = Joi.object({
        _id: Joi.string().required().regex(/^[0-9a-fA-F]{24}$/)
    });
    try {
        await taskSchema.validateAsync({ _id });
    } catch (error) {
        return res.send('_id属性不正确，可能被修改');
    }
    const task = await Task.findOneAndDelete({ _id });
    res.send(task);
}