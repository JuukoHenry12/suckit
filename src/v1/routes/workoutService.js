const express = require("express");
const router = express.Router();
const workoutController = require('../../controllers/workoutController')

router.get("/", workoutController.getAllWorkOuts)

router.get("/:workoutId", workoutController.getOneWorkout)

router.post("/", workoutController.createNewWorkOut)
router.patch("/:workoutId", workoutController.updateOneWork)

router.delete("/:workoutId", workoutController.deleteOneWork)

module.exports = router