const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
async function userPost(req, res) {
  const { username, email, password } = req.body;
  const isEmailAlreadyRegistered = await userModel.find({ email });
  if (isEmailAlreadyRegistered) {
    return res.status(409).json({
      message: "User already register with this email",
    });
  }
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findOne({
      _id: decode.id,
    });
    res.status(200).json({
      message: "Access granted",
      user,
    });
  } catch (err) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
}

module.exports = { userPost };
