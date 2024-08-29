const Todo = require("../models/Todo");

exports.createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
    
        const resp = await Todo.create({ title, description });

        res.status(200).json({
            success: true,
            data: resp,
            message: "Entry created successfully",
        });
    } catch (err) {
        console.error(err); 
        res.status(500).json({
            success: false,
            message: "Server error, could not create the entry",
        });
    }
};
