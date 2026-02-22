const express = require("express");
const noteModel = require("./models/note.model");
const app = express();
app.use(express.json());

app.post("/notes", async (req, res) => {
  const data = req.body;
  await noteModel.create({
    title: data.title,
    description: data.description,
  });

  res.status(201).json({
    message: "Note created successfully",
  });
});

app.get("/notes", async (req, res) => {
  //find() method return an array of all data or no data,
  //However, findOne({condition}) method a single note match with given condition if condition not match it will return null not array!
  const notes = await noteModel.find();
  res.status(200).json({
    message: "Notes fetched success fully",
    notes,
  });
});

app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;
  //FindOneAndDelete() method delete data and return that data as well where as deleteOne() method only delete that data.
  await noteModel.findOneAndDelete({
    _id: id,
  });
  res.status(200).json({
    message: "Note remove successfullt",
  });
});

app.patch("/notes/:id", async (req, res) => {
  const id = req.params.id;
  await noteModel.findByIdAndUpdate(id, {
    ...req.body,
  });
  res.status(200).json({
    message: "Note updated successfully",
  });
});
module.exports = app;
