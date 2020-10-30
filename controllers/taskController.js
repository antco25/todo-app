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

exports.addItem = () => {
    Tasks.addTask("addedTask", "My added task", Tasks.TODO)
}

exports.task_get = (req, res) => {
    res.send('NOT IMPLEMENTED')
}