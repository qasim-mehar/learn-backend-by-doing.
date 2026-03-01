const authController = require("../controller/auth.controller");
const express = require("express");
const router = express.Router();

router.post("/register", authController.userRegister);
module.exports = router;
