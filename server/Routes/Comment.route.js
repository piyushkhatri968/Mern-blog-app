import express from "express";
import {
  createComment,
  getPostComments,
  likeComment,
  editComment,
  deleteComment,
} from "../Controllers/Comment.controller.js";
import { verifyToken } from "../utils/VerifyUser.js";

const router = express.Router();

router.post("/create", verifyToken, createComment);
router.get("/getPostComments/:postId", getPostComments);
router.put("/likeComment/:commentId", verifyToken, likeComment);
router.put("/editComment/:commentId", verifyToken, editComment);
router.put("/deleteComment/:commentId", verifyToken, deleteComment);

export default router;
