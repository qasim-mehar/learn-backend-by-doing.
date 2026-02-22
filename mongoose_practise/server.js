const express = require("express");
const connectDB = require("./src/db/db.js"); // Note the .js extension!

const app = express();

connectDB();
//start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
