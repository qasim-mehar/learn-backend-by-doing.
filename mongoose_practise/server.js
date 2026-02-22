const connectDB = require("./src/db/db.js"); // Note the .js extension!
const app = require("./src/app.js");

connectDB();
//start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
