const express = require("express");
const router = express.Router();

const { getalltodo, gettodobyid }=require("../controllers/getalltodo");
const { createTodo } = require("../controllers/Todologic");
const {updatetodo}=require("../controllers/updatetodo");
const {deletetodo}=require("../controllers/deletetodo");

router.post("/todo", createTodo);
router.get("/gettodo",getalltodo);
router.get("/gettodoid/:id", gettodobyid);
router.put("/updatetodoid/:id", updatetodo);
router.delete("/deletetodo/:id",deletetodo);

module.exports = router;
