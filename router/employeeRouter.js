const express = require("express");
const employeeModule = require("../modules/employeeModule")
const router = express.Router()

router.get("/get", employeeModule.getEmployees)
router.put("/update/:id", employeeModule.updateEmployees)
router.post("/create", employeeModule.createEmployees)
router.delete("/delete/:id", employeeModule.deleteEmployees)

module.exports = router;