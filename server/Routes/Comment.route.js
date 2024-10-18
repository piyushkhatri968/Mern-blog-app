import express, { Router } from "express";
import {
  createComment,
  getPostComments,
} from "../Controllers/Comment.controller.js";
import { verifyToken } from "../utils/VerifyUser.js";

const router = express.Router();

router.post("/create", verifyToken, createComment);
router.get("/getPostComments/:postId", getPostComments);

export default router;
