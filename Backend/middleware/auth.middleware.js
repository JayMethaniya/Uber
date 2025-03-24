const userModel = require("../Models/user.model");
const brycpt = require("bcrypt");
const jwt = require("jsonwebtoken");
const blackListTokenModel = require("../Models/blackListTokens.model");
const captainModel = require("../Models/captain.model");

module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const isTokenBlackListed = await blackListTokenModel.findOne({
    token: token,
  });
  if (isTokenBlackListed) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id);
    req.user = user;
    return next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports.authCaptain = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const isTokenBlackListed = await blackListTokenModel.findOne({
    token: token,
  });
  if (isTokenBlackListed) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const captain = await captainModel.findById(decoded._id);
    req.captain = captain;
    return next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
}