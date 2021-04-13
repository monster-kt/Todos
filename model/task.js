/*
 * @description:任务列表集合
 * @version:1.0
 * @Date: 2021-04-12 14:43:31
 * @LastEditors: surui
 * @LastEditTime: 2021-04-12 19:16:02
 * @FilePath: \VSwork\Ajax\todo\model\task.js
*/
const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    title: {
        type: String,
        require: true,
        unique: true
    },
    completed: {
        type: Boolean,
        default: false
    }
}, { versionKey: false });
const Task = mongoose.model('task', taskSchema);
/* Task.create({
    title: 'eat'
})
    .then(()=>console.log('初始化成功'))
    .catch((err)=>console.log('false',err)); */



module.exports = Task;