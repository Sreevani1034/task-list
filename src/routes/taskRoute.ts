const express = require("express");
const router = express.Router();

const { getAllTaskController } = require("../controllers/orderControllers");

router.get("/tasks", getAllTaskController);

module.exports = router;
