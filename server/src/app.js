console.log("hello");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

//route '/status'
app.get("/status", (req, res) => {
  res.send({
    message: "Im working"
  });
});

//start app
const port = process.env.PORT || 8081;
app.listen(port, console.log(`Minions working at port:${port}`));
