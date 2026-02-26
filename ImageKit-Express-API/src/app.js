const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const uploadFile = require("./services/storage.service");
const postModel = require("./models/post.model");
const app = express();
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

//"image" in single method is the name of filename field in postman to determine file
app.post("/create-post", upload.single("image"), async (req, res) => {
  const result = await uploadFile(req.file.buffer);
  const post = await postModel.create({
    image: result.url,
    caption: req.body.caption,
  });
  return res.status(201).json({
    message: "Post created successfully",
    post,
  });
});
module.exports = app;
