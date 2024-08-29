const Todo = require("../models/Todo");

exports.updatetodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        const id = req.params.id; 

        const updatedTodo = await Todo.findByIdAndUpdate(
            id, // The ID of the document to update
            { title, description, updatedAt: Date.now() },
            { new: true, runValidators: true } 
        );

        if (!updatedTodo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found",
            });
        }
        
        res.status(200).json({
            success: true,
            data: updatedTodo,
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Server error, could not update the entry",
        });
    }
};
