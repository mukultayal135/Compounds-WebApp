const express = require("express");
const compoundController = require("../controllers/compoundController");
const router = express.Router();

router
  .route("")
  .get(compoundController.getAllCompounds)
  .post(compoundController.createCompound);

router
  .route("/:id")
  .put(compoundController.updateCompound)
  .get(compoundController.getCompoundById)
  .delete(compoundController.deleteCompound);

module.exports = router;
