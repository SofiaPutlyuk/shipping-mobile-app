const express = require("express")
const router = express.Router()
const accountController = require("../controllers/accountController")
router.get("/" , accountController.getCurrentUser)
router.post("/", accountController.createNewUser)
module.exports = router