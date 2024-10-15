import Post from "../Models/Post.model.js";
import { errorHandler } from "../utils/Error.js";

export const create = async (req, res, next) => {
  //console.log(req.user); //! checking data from cookie
  if (!req.user.isAdmin) {
    return next(errorHandler(403, "You are not allowed to create post"));
  }

  if (!req.body.title || !req.body.content) {
    return next(errorHandler(400, "Please provide all required fields"));
  }

  //! slug is for SEO purpose.
  const slug = req.body.title
    .split(" ")
    .join("-")
    .toLowerCase()
    .replace(/[^a-zA-Z0-9-]/g, "");

  const newPost = new Post({
    ...req.body,
    title: req.body.title.trim(),
    slug,
    userId: req.user.id, // Use the user ID from the request object, not the body
  });
  try {
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    next(error);
  }
};
