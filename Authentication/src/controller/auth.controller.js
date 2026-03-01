const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
con;
async function userRegister(req, res) {
  const { username, password, email } = req.body;
  const user = await userModel.create({
    username,
    password,
    email,
  });
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );

  res.status(201).json({
    message: "User register successfully",
    user,
    token,
  });
}
module.exports = { userRegister };
