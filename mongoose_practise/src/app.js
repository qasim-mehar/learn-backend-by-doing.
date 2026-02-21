const express = require("express");
const app = express();

const noteModel = require("./models/note.model");
app.use(express.json());

app.post("/notes", async (req, res) => {
  const data = req.body;
  await noteModel.create({
    title: data.title,
    description: data.description,
  });

  res.status(200).json({
    message: "Note created successfully",
  });
});
module.exports = app;
