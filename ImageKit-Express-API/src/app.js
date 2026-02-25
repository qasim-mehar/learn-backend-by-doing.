const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const app = express();
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });
// app.post("/create-post", async (req,res)={

// })
module.exports = app;
