const crudScheme = require('./../Schemes/crudScheme')

exports.allTodo = async (req, res) => {

    try{
        const tasks  = await crudScheme.find().sort({'_id':-1});

        res
        .status(200)
        .json({
            status: "success",
            results: tasks.length,
            data: {
                tasks
            }
        })
    }catch(err){
        res
        .status(400)
        .json({status: `Failed`, Message: err})
        
    }
}
exports.addTodo = async (req, res) => {
    try{
        const newTask = await crudScheme.create(req.body);
        res
        .status(201)
        .json({
            status: 'Success!',
            data: {
                newTask
            }
        })
    }catch(err){
        res
        .status(400)
        .json({status: `Failed`, Message: err})
        
    }
}
exports.deleteTodo = async (req, res) => {
    
    try{
        await crudScheme.findByIdAndDelete(req.params.id);
        res
        .status(200)
        .json({status: 'Success!', Message: "Record is Deleted"})
    }catch(err){
        res
        .status(400)
        .json({status: `Failed`, Message: err})
        
    }
}
exports.editTodo = async (req, res) => {
    
    try{
        res
        .status(200)
        .json({status: 'Success!'})
    }catch(err){
        res
        .status(400)
        .json({status: `Failed`, Message: err})
        
    }
}

exports.changeTodoDoing = async (req, res, next) => {
    try{
        const changeStatus = await crudScheme.findByIdAndUpdate(req.params.id, { taskStatus: "doing"})
        res
        .status(200)
        .json({
            status: 'Success!',
            data: {
                changeStatus
            }
        })

    }catch(err){
        res
        .status(400)
        .json({status: `Failed`, Message: err.message})
        
    }
}
exports.changeTodoDone = async (req, res, next) => {
    try{
        const changeStatus = await crudScheme.findByIdAndUpdate(req.params.id, { taskStatus: "done"})
        res
        .status(200)
        .json({
            status: 'Success!',
            data: {
                changeStatus
            }
        })

    }catch(err){
        res
        .status(400)
        .json({status: `Failed`, Message: err.message})
        
    }
}
exports.changeTodo = async (req, res, next) => {
    try{
        const changeStatus = await crudScheme.findByIdAndUpdate(req.params.id, { taskStatus: "todo"})
        res
        .status(200)
        .json({
            status: 'Success!',
            data: {
                changeStatus
            }
        })

    }catch(err){
        res
        .status(400)
        .json({status: `Failed`, Message: err.message})
        
    }
}
