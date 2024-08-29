const Todo = require("../models/Todo");

exports.deletetodo = async (req, res) => {
    try {
        const id = req.params.id;

        // Find the todo by ID and delete it
        const deletedTodo = await Todo.findByIdAndDelete(id);

        if (!deletedTodo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Todo deleted successfully",
        });
    } catch (err) {
        console.error(err); 
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Server error, could not delete the todo",
        });
    }
};
