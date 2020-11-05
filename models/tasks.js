var Tasks = function () { }

Tasks.TODO = 0
Tasks.PROGRESS = 1
Tasks.COMPLETED = 2
Tasks.Count = 3;

Tasks.tasks = [
    { "id": 0, "name": "Sample Task 1", "desc": "My first task!", "status": 0 },
    { "id": 1, "name": "Sample Task 2", "desc": "My second task!", "status": 1 },
    { "id": 2, "name": "Sample Task 3", "desc": "My third task!", "status": 2 },
]

Tasks.addTask = function (name, desc, status) {
    Tasks.tasks.push({ "id": Tasks.Count, "name": name, "desc": desc, "status": status })
    Tasks.Count++
}

Tasks.getTask = function (id) {
    //Find task
    let index = Tasks.getTaskIndex(id)

    if (index == -1) {
        return null
    } else {
        return Tasks.tasks[index]
    }
}

Tasks.getList = function (status) {
    return Tasks.tasks.filter(task => {
        return (task.status == status)
    })
}

Tasks.delete = function (id) {
    //Find task
    let index = Tasks.getTaskIndex(id)

    if (index == -1) {
        return
    }

    //Delete element
    Tasks.tasks.splice(index, 1)
}

Tasks.updateStatus = function (id, status) {
    //Find task
    let index = Tasks.getTaskIndex(id)

    if (index == -1) {
        return
    }

    //Update status
    Tasks.tasks[index].status = status
}

Tasks.updateTask = function (id, name, desc) {
    //Find task
    let index = Tasks.getTaskIndex(id)

    if (index == -1) {
        return
    }

    //Update task
    Tasks.tasks[index].name = name
    Tasks.tasks[index].desc = desc
}

Tasks.getTaskIndex = function (id) {
    //Find element
    return Tasks.tasks.map(x => x.id).indexOf(parseInt(id))
}

module.exports = Tasks