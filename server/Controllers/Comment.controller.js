import { errorHandler } from "../utils/Error.js";
import Comment from "../Models/Comment.model.js";

export const createComment = async (req, res, next) => {
  try {
    const { content, userId, postId } = req.body;
    if (userId !== req.user.id) {
      return next(errorHandler(403, "You are not allowed to post the comment"));
    }

    if (!content || !userId || !postId) {
      return next(errorHandler(402, "All fields are required"));
    }

    const newComment = new Comment({
      content,
      userId,
      postId,
    });

    await newComment.save();
    res.status(200).json(newComment);
  } catch (error) {
    next(error);
  }
};

export const getPostComments = async (req, res, next) => {
  try {
    const { postId } = req.params;
    const comments = await Comment.find({ postId }).sort({ createdAt: -1 });
    res.status(200).json(comments);
  } catch (error) {
    next(error);
  }
};
