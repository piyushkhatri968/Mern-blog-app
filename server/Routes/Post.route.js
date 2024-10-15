import express from "express";
import { verifyToken } from "../utils/VerifyUser.js";
import { create } from "../Controllers/Post.Contoller.js";
const router = express.Router();

router.post("/create", verifyToken, create);

export default router;
