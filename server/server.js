import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";
const app = express();
const PORT = process.env.PORT || 8080; //!

import cookieParser from "cookie-parser";

app.use(express.json());
app.use(
  cors({
    origin: "https://pk-mern-blog-app.vercel.app/", // Your frontend URL
    credentials: true, // Allow credentials (cookies)
  })
);
app.use(cookieParser());

import mongoose from "mongoose";
import userRoute from "./Routes/User.route.js";
import authRoute from "./Routes/Auth.route.js";
import postRoute from "./Routes/Post.route.js";
import commentRoute from "./Routes/Comment.route.js";

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("App connected to the Database");
  })
  .catch((error) => {
    console.log("Error in connecting to Database", error.message);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);
app.use("/api/comment", commentRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

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
