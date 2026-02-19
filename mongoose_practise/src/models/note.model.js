const mongoose = require("mongoose");
const noteSchema = new mongoose.Schema({
  title: String,
  description: String,
});
//ti perform CRUD operations
const noteModel = mongoose.model("note", noteSchema);
