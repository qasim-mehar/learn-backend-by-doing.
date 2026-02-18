const mongoose = require("mongoose");
async function connectDB() {
  await mongoose.connect(
    "mongodb+srv://test:F03Va4ndFLf8496g@learn-backend-by-doing.mupoocp.mongodb.net/database",
  );
  console.log("Connected to DB");
}
connectDB();
module.exports = connectDB;
