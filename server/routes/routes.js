const express = require("express");
const router = express.Router();
const AuthenticationControllerPolicy = require("../policies/AuthenticationControllerPolicy");
const AuthenticationController = require("../controllers/AuthenticationController");

// @route   POST /register
// @desc    register using credentials
// @access  Public

router.post(
  //path
  "/register",
  //checking for errors
  AuthenticationControllerPolicy.register,
  //If there is no error
  AuthenticationController.register
);

module.exports = router;
