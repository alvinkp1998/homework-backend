const express = require("express");
const router = express.Router();
const userRoutes = require("../controllers/users/routes");
const classRoutes = require("../controllers/classes/routes");
const materialRoutes = require("../controllers/materials/routes");
const scheduleRoutes = require("../controllers/schedules/routes");

router.use("/user", userRoutes);
router.use("/class", classRoutes);
router.use("/material", materialRoutes);
router.use("/schedule", scheduleRoutes);

module.exports = router;
