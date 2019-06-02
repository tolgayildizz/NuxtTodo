const express = require('express');
const router = express.Router();

//Import Model

const Todos = require('./../models/Todos');

router.get('/get-all', (req,res) => {
    Todos.find({}, (err,data)=> {
        if(err) {
            throw err;
        }
        else {
            res.json({
                docs:data,
            }).status(200);
        }
    })
});

router.post('/save', (req,res) => {
    //console.log(req.body);
    const newTodoItem = new Todos({
        text:req.body.todoText,
    });

    newTodoItem.save().then((response) => {
        //console.log(response);
        res.json({
            data:response
        }).status(200);
    }).catch((err) => {
        res.json({
            message: err.message,
        }).status(400)
    })
});

router.put('/update', (req,res) => {
    let updatedTodo = req.body.todo;

    Todos.findOneAndUpdate({_id:updatedTodo._id}, updatedTodo, {new:true}, (err,data) => {
        if(err) {
            throw err;
        }
        else {
            res.status(200).json({
                data,
            });
        }
    })
});

router.delete('/delete', (req,res) => {
    let todo = req.body.todo;

    Todos.findOneAndDelete({_id:todo._id}, ()=> {
        res.json({
            message:"deleted"
        }).status(204);
    })
});


module.exports = router;