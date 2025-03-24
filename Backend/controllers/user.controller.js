const userModel = require("../Models/user.model");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");

module.exports.registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { fullName, email, password } = req.body;
  const hashedPassword = await userModel.userPassword(password);
  const user = await userService.createUser({
    firstName: fullName.firstName,
    lastName: fullName.lastName,
    email,
    password: hashedPassword,
  });
  const token = await userModel.generateAuthToken(user);
  res.status(201).json({ user, token });
};

module.exports.loginUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;

  const user = await userModel.findOne({ email }).select("+password");

  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

const comparePassword = await userModel.comparePassword(password, user.password);

if (!comparePassword) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

 const token = user.generateAuthToken();

 res.status(200).json({ user, token });
};
