const { TODO } = require('../models/tasks')
var Tasks = require('../models/tasks')

exports.todo_list = () => {
    return Tasks.getList(Tasks.TODO)
}

exports.progress_list = () => {
    return Tasks.getList(Tasks.PROGRESS)
}

exports.completed_list = () => {
    return Tasks.getList(Tasks.COMPLETED)
}

exports.all_list = () => {
    return Tasks.tasks
}

exports.getTask = (id) => {
    return Tasks.getTask(id)
}

exports.delete = (id) => {
    Tasks.delete(id)
}

exports.updateStatus = (id, status) => {
    Tasks.updateStatus(id, status)
}

exports.updateTask = (id, name, desc) => {
    Tasks.updateTask(id, name, desc)
}

exports.addTask = (taskName, taskDesc, taskStatus) => {
    Tasks.addTask(taskName, taskDesc, taskStatus)
}

exports.validateInput = (taskName, taskDesc) => {

    function validate(input) {
        //Check if null, empty or blank
        if (!input || 0 === input.length || /^\s*$/.test(input))
            return true
        return false
    }

    return {nameError: validate(taskName), descError: validate(taskDesc)}
}

exports.TODO = Tasks.TODO
exports.PROGRESS = Tasks.PROGRESS
exports.COMPLETED = Tasks.COMPLETED