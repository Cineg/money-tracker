const Joi = require("joi");

module.exports = {
  register(req, res, next) {
    //what is needed
    const schema = {
      email: Joi.string().email({ minDomainAtoms: 2 }), //must be email
      password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/) //must match this regex
    };

    //compare schema from above to input data and throw an error if there is one
    const { error, value } = Joi.validate(req.body, schema);
    if (error) {
      switch (error.details[0].context.key) {
        case "email":
          res.status(400).send({
            error: "You must provide a valid email address"
          });
          break;
        case "password":
          res.status(400).send({
            error:
              "Password must have between 6 to 32 characters in length. No special characters allowed."
          });
        default:
          res.status(400).send({
            error: "Invalid registration information"
          });
      }
    } else {
      //if there is no error
      next();
    }
  }
};
