import express, { Router } from "express";
import { createComment } from "../Controllers/Comment.controller.js";
import { verifyToken } from "../utils/VerifyUser.js";

const router = express.Router();

router.post("/create", verifyToken, createComment);

export default router;
