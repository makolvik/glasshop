const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
require("dotenv").config();

const port = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const URI = process.env.MONGODB_URI;
mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;

const glassesRouter = require("./routes/glasses");
const orderRouter = require("./routes/order");
app.use("/Glass", glassesRouter);
app.use("/Order", orderRouter);

connection.once("open", () => {
  console.log("MongoDB connected");
});

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log("server started");
});