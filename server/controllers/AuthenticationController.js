const User = require("../models/User");

module.exports = {
  register(req, res) {
    //pass data from registration form
    const newUser = new User({
      email: req.body.email,
      password: req.body.password
    });

    newUser
      .save()
      .then(item => res.json(item))
      .catch(err =>
        //if user already exists, print error
        res.status(404).send({ success: false, error: "User already exists" })
      );
  }
};
