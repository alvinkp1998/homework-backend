const express = require("express");
const router = express.Router();

const createSchedule = require("./create.scheduleController");
const getSchedule = require("./get.scheduleController");
const updateSchedule = require("./update.scheduleController");
const deleteSchedule = require("./delete.scheduleController");

router.get("/", getSchedule.service);
router.get("/:id", getSchedule.service);
router.post("/", createSchedule.service);
router.put("/:id", updateSchedule.service);
router.delete("/:id", deleteSchedule.service);

module.exports = router;
