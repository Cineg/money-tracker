const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./config/config");

//get routes
const routes = require("./routes/routes");

const app = express();
app.use(bodyParser.json());
app.use(cors());

//db config
const db = require("./keys/keys").mongoURI;

//connect to db
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

//use routes
app.use("/", routes);

//start app
const port = config.port;
app.listen(port, console.log(`Minions working at port:${port}`));
