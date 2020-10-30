var express = require('express');
var router = express.Router();
var task_controller = require('../controllers/taskController');

/* GET home page. */
router.get(['/', '/todo'], function(req, res, next) {
  res.render('index', { title: 'toDo', category: 'todo', tasks: task_controller.todo_list() });
});

router.get('/progress', function(req, res, next) {
  res.render('index', { title: 'toDo', category: 'progress', tasks: task_controller.progress_list() });
});

router.get('/completed', function(req, res, next) {
  res.render('index', { title: 'toDo', category: 'completed', tasks: task_controller.completed_list() });
});

router.get('/all', function(req, res, next) {
  res.render('index', { title: 'toDo', category: 'all', tasks: task_controller.all_list() });
});

router.post('/addItem', function(req, res, next) {
  task_controller.addItem();
  res.redirect('/')
});

module.exports = router;
