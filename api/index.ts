import express from "express";
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const postRoute = require("./routes/post");
const categoryRoute = require("./routes/categories");
const ImageCoverRoute = require("./routes/imagecover");
const bodyParser = require("body-parser");

dotenv.config();

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

if (process.env.MONGO_URI !== undefined) {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(console.log("Connected to MongoDB"))
    .catch((err: Error) => console.log(err));
} else console.log("No MONGO_URL found");
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/post", postRoute);
app.use("/api/category", categoryRoute);
app.use("/api/imagecover", ImageCoverRoute);

app.listen("5000", () => {
  console.log("Backend is running on port 5000");
});
