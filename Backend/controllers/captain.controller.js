const captainModel = require("../Models/captain.model");
const captainService = require("../services/captain.service");
const { validationResult } = require("express-validator");
const blackListTokenModel = require("../Models/blackListTokens.model");

module.exports.registerCaptain = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { fullName, email, password, vehicle } = req.body;

  const isCaptainExist = await captainModel.findOne({ email });
  if (isCaptainExist) {
    return res.status(400).json({ message: "Captain already exists" });
  }

  const hashedPassword = await captainService.hashPassword(password);
  const captain = await captainService.createCaptain({
    firstName: fullName.firstName,
    lastName: fullName.lastName,
    email,
    password: hashedPassword,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType,
  });
  const token = await captain.generateAuthToken();
  res.status(201).json({ captain, token });

};

module.exports.loginCaptain = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } 
  const { email, password } = req.body;
  const captain = await captainModel.findOne({ email }).select("+password");
  if (!captain) {
    return res.status(400).json({ message: "Invalid email or password" });
  }
  const isMatch = await captainService.comparePassword(password, captain.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid email or password" });
  }
  const token = await captain.generateAuthToken();
  res.status(200).json({ captain, token }); 
}

module.exports.getProfile = async (req, res) => {
  res.status(200).json(req.captain);
};

module.exports.logoutCaptain = async (req, res) => {
  const token = req.cookies.token || req.headers.authorization.split(" ")[1];
  await captainService.blackListToken(token);
  res.clearCookie("token");
  res.status(200).json({ message: "Logout successfully" });
}