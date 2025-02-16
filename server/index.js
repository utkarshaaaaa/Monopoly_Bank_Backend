const express = require("express");
const cors = require("cors");
require("dotenv").config();
const router = require("./routers");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

app.use(cors());

app.use("/players", router);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECT_URI);
    console.log("Connect to MongoDB successfully");
  } catch (error) {
    console.log("Connect failed " + error.message);
  }
};
connectDB();

// mongoose.connect('mongodb://127.0.0.1:27017/bank')

app.listen(process.env.PORT, () => {
  console.log("server is running ");
});
