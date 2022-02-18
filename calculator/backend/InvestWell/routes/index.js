const { sipStepUpCalculator } = require("../controller/index")
const express = require("express")
const router = express.Router()

router.post("/sipStepUpCalculator", sipStepUpCalculator)

module.exports =  router
