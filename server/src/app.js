const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// @route   POST /register
// @desc    register using credentials
// @access  Public
app.post("/register", (req, res) => {
  res.send({
    message: `Hello ${req.body.email}.`
  });
});

//start app
const port = process.env.PORT || 8081;
app.listen(port, console.log(`Minions working at port:${port}`));
