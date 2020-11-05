var express = require('express');
var router = express.Router();
var task_controller = require('../controllers/taskController');
var utils = require('../utils')

var date = utils.getDate();

/* GET home page. */
router.get(['/', '/todo'], function(req, res, next) {
  var tasks = task_controller.todo_list()
  var emptyMessage = "Add something to do!"
  res.render('index', { date: date, category: 'todo', tasks: tasks, isEmpty: (tasks.length === 0), emptyMessage: emptyMessage });
});

router.get('/progress', function(req, res, next) {
  var tasks = task_controller.progress_list() 
  var emptyMessage = "Start one of your tasks!"
  res.render('index', { date: date, category: 'progress', tasks: tasks, isEmpty: (tasks.length === 0), emptyMessage: emptyMessage });
});

router.get('/completed', function(req, res, next) {
  var tasks = task_controller.completed_list()
  var emptyMessage = "Complete some of your tasks!"
  res.render('index', { date: date, category: 'completed', tasks: tasks, isEmpty: (tasks.length === 0), emptyMessage: emptyMessage });
});

router.get('/all', function(req, res, next) {
  var tasks = task_controller.all_list()
  var emptyMessage = "Your Todo list is empty!"
  res.render('index', { date: date, category: 'all', tasks: tasks, isEmpty: (tasks.length === 0), emptyMessage: emptyMessage});
});

function setStatus(category) {
  var statusValue = task_controller.TODO
  if (category == 'progress')
    statusValue = task_controller.PROGRESS
  else if (category == 'completed')
    statusValue = task_controller.COMPLETED
    
  return statusValue
}

router.post('/new', function(req, res, next) {
  var category = req.body.category

  res.render('index', { 
                        date: date, 
                        isForm: true, 
                        statusValue: setStatus(category),
                        from: req.headers.referer 
                      });
});

router.post('/addItem', function(req, res, next) {
  var taskName = req.body.taskName
  var taskDesc = req.body.taskDesc
  var taskStatus = req.body.taskStatus
  var validate = task_controller.validateInput(taskName, taskDesc)

  if (validate.nameError || validate.descError) {
    res.render('index', { 
                          date: date, 
                          isForm: true,
                          nameValue: taskName,
                          descValue: taskDesc,
                          statusValue: taskStatus,
                          error: {
                            name: validate.nameError,
                            desc: validate.descError
                          } 
                        }) 
  } else {
    task_controller.addTask(taskName, taskDesc, taskStatus);
    res.redirect(req.body.from)
  }
});

router.post('/edit', function(req, res, next) {
  var taskId = req.body.id
  var task = task_controller.getTask(taskId)

  if (task == null)
    res.redirect('back')
  else
    res.render('index', { 
                          date: date, 
                          isForm: true,
                          isEdit: true,
                          nameValue: task.name,
                          descValue: task.desc,
                          idValue: task.id,
                          from: req.headers.referer 
                         });
});

router.post('/updateItem', function(req, res, next) {
  var taskId = req.body.taskId
  var taskName = req.body.taskName
  var taskDesc = req.body.taskDesc
  var validate = task_controller.validateInput(taskName, taskDesc)

  if (validate.nameError || validate.descError) {
    res.render('index', { 
                          date: date, 
                          isForm: true,
                          isEdit: true,
                          nameValue: taskName,
                          descValue: taskDesc,
                          idValue: taskId,
                          error: {
                            name: validate.nameError,
                            desc: validate.descError
                          } 
                        }) 
  } else {
    task_controller.updateTask(taskId, taskName, taskDesc);
    res.redirect(req.body.from)
  }
});

router.post('/delete', function(req, res, next) {
  task_controller.delete(req.body.id);
  res.redirect('back')
})

router.post('/statusChange', function(req, res, next) {
  task_controller.updateStatus(req.body.id, req.body.status)
  res.redirect('back')
})

module.exports = router;
