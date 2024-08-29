const express = require("express");
const app = express();
require("dotenv").config(); 
const PORT = process.env.PORT || 4000;

app.use(express.json());


const route = require("./routes/createtodo");
app.use("/api/v1", route);

const dbconnect = require("./config/database");
dbconnect();

// Define routes
app.get("/", (req, res) => {
    res.send('<h1>This is home</h1>');
});

// Start server
app.listen(PORT, () => {
    console.log("App is running successfully on port " + PORT);
});
