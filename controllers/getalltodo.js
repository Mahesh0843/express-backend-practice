const Todo = require("../models/Todo");

exports.getalltodo = async (req, res) => {
    try {
        const todos = await Todo.find({});
        res.status(200).json({
            success: true,
            data: todos,
            message: "Entire Data is fetched"
        });
    } catch (err) {
        console.error(err); 
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Server error, could not fetch the todos",
        });
    }
};

exports.gettodobyid = async (req, res) => {
    try {
        const todoId = req.params.id;  // Extract the ID from the request parameters
        const todo = await Todo.findById({_id : todoId});

        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found"
            });
        }

        res.status(200).json({
            success: true,
            data: todo,
            message: "Todo fetched successfully"
        });
    } catch (err) {
        console.error(err); 
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Server error, could not fetch the todo by ID",
        });
    }
};
