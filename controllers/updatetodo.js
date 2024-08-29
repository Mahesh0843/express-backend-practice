const Todo = require("../models/Todo");

exports.updatetodo = async (req, res) => {
    try {
        const { title, description } = req.body; // Extract title and description from request body
        const id = req.params.id; // Get the Todo ID from the request parameters

        // Find the Todo by ID and update it with the new data
        const updatedTodo = await Todo.findByIdAndUpdate(
            id, // The ID of the document to update
            { title, description, updatedAt: Date.now() }, // Correctly invoke Date.now() to get the current timestamp
            { new: true, runValidators: true } // Options to return the updated document and run validation
        );

        if (!updatedTodo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found",
            });
        }

        // Send a success response with the updated Todo
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
