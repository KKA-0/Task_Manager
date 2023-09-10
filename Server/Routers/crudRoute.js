const express = require('express')
const router = express.Router();
const crudController = require('./../Controllers/crudController')

    router.get('/all', crudController.allTodo)
    router.post('/add', crudController.addTodo)
    router.patch('/TodoDone/:id', crudController.changeTodoDone)
    router.patch('/TodoDoing/:id', crudController.changeTodoDoing)
    router.patch('/Todo/:id', crudController.changeTodo)

router
    .route('/:id')
    .delete(crudController.deleteTodo)
    .put(crudController.editTodo)
module.exports = router;