const express = require("express");
const router = express.Router();

const createMaterial = require("./create.materialController");
const getMaterial = require("./get.materialController");
const updateMaterial = require("./update.materialController");
const deleteMaterial = require("./delete.materialController");

router.get("/", getMaterial.service);
router.get("/:id", getMaterial.service);
router.post("/", createMaterial.service);
router.put("/:id", updateMaterial.service);
router.delete("/:id", deleteMaterial.service);

module.exports = router;
