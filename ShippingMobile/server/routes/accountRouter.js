const express = require("express")
const router = express.Router()
const accountController = require("../controllers/accountController")
const loginController = require("../controllers/loginController")
router.get("/" , accountController.getCurrentUser)
router.post("/", accountController.createNewUser)
router.post("/login" , loginController.loginUser)
module.exports = router