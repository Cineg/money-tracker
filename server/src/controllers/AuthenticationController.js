const User = require("../models/User");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const bcrypt = require("bcrypt-nodejs");

//to get token
function jwtSignUser(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign(user.toJSON(), config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  });
}

module.exports = {
  register(req, res) {
    //pass data from registration form
    let newUser = new User({
      email: req.body.email,
      password: req.body.password
    });

    bcrypt.genSalt(config.BCRYPT_SALT_ROUNDS, function(err, salt) {
      bcrypt.hash(newUser.password, salt, null, function(err, hash) {
        if (err) {
          console.log(err);
        }
        newUser.password = hash;
        newUser.save(function(err) {
          if (err) {
            res
              .status(404)
              .send({ success: false, error: "User already exists" });
          } else {
            res.send({
              success: true,
              message: "Registered",
              user: newUser,
              token: jwtSignUser(newUser)
            });
          }
        });
      });
    });
  },

  login(req, res) {
    User.findOne({ email: req.body.email }, (err, user) => {
      if (!user) {
        res.status(403).send({ success: false, error: "Wrong credentials" });
      } else {
        bcrypt.compare(req.body.password, user.password, function(
          err,
          isMatch
        ) {
          if (err) {
            console.log(err);
          }
          if (isMatch) {
            res.status(200).send({
              user: user,
              token: jwtSignUser(user)
            });
          } else {
            res
              .status(403)
              .send({ success: false, error: "Wrong credentials" });
          }
        });
        // if (user.password !== req.body.password) {
        //   res.status(403).send({ success: false, error: "Wrong credentials" });
        // } else {
        //   res.status(200).send({
        //     user: user,
        //     token: jwtSignUser(user)
        //   });
        // }
      }
    });
  }
};
