var Tasks = function() {}

Tasks.TODO = 0
Tasks.PROGRESS = 1
Tasks.COMPLETED = 2

Tasks.tasks = [
    {"name": "Todo 1", "desc": "My first todo", "status": 0},
    {"name": "Todo 2", "desc": "My second todo", "status": 1},
    {"name": "Todo 3", "desc": "My third todo", "status": 2},
]

Tasks.addTask = function(name, desc, status) {
    Tasks.tasks.push({"name": name, "desc": desc, "status": status})
}

Tasks.getList = function(status) {
    return Tasks.tasks.filter( task => {
        return (task.status == status)
    })
}

module.exports = Tasks