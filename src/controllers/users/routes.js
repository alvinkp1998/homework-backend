const express = require("express");
const router = express.Router();

const createUser = require("./create.userController");
const getUser = require("./get.userController");
const updateUser = require("./update.userController");
const deleteUser = require("./delete.userController");

router.get("/", getUser.service);
router.get("/:id", getUser.service);
router.post("/", createUser.service);
router.put("/:id", updateUser.service);
router.delete("/:id", deleteUser.service);

module.exports = router;
