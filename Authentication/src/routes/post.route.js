const userController = require("../controller/post.controller");
const express = require("express");
const router = express.Router();

router("/post", userController.userPost);

module.exports = router;
