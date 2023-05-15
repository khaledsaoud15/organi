const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

app.use(express.json());
app.use(cors());

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("db running");
  })
  .catch((err) => console.log(err));

const multer = require("multer");
const path = require("path");
const productRoute = require("./routes/productRoute");

app.use("/images", express.static(path.join(__dirname, "/images")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("file has been uploaded successfully");
});

app.use("/api/", productRoute);

app.listen(4000, () => {
  console.log("server is running");
});
