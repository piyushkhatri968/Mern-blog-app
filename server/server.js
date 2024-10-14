import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";
const app = express();
const port = 8080; //!

import cookieParser from "cookie-parser";

app.use(express.json());
app.use(cors());
app.use(cookieParser());

import mongoose from "mongoose";
import userRoute from "./Routes/User.route.js";
import authRoute from "./Routes/Auth.route.js";

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("App connected to the Database");
  })
  .catch((error) => {
    console.log("Error in connecting to Database", error);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  //!
  console.log(`Example app listening on port ${port}!`);
});

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

// MIDDLEWARE # 01
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

export default app; // Export the app instead of using app.listen()
