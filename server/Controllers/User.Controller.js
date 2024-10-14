import { errorHandler } from "../utils/Error.js";
import bcryptjs from "bcryptjs";
import User from "../Models/User.model.js";

export const test = (req, res) => {
  res.json({ message: "Api is working" });
};

export const updateUser = async (req, res, next) => {
  let { username, password, email, profilePicture } = req.body;

  if (req.user.id !== req.params.userId) {
    return next(errorHandler(403, "You are not allowed to update this user"));
  }

  if (password) {
    if (password.length < 6) {
      return next(errorHandler(400, "Password must be atleast 6 charachters"));
    }
    password = bcryptjs.hashSync(password, 10);
  }

  if (username) {
    if (username.length < 7 || username.length > 20) {
      return next(
        errorHandler(400, "username must be between 7 and 20 characters")
      );
    }
    if (username.includes(" ")) {
      return next(errorHandler(400, "username cannot contains spaces"));
    }

    if (username !== username.toLowerCase()) {
      return next(errorHandler(400, "username must be lowercase"));
    }
    if (!/^[a-zA-Z0-9]+$/.test(username)) {
      return next(
        errorHandler(400, "username can only contain the letters and numbers")
      );
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.userId,
        {
          $set: {
            username: req.body.username,
            email: req.body.email,
            profilePicture: req.body.profilePicture,
            password: req.body.password,
          },
        },
        { new: true }
      );
      if (!updatedUser) {
        return next(errorHandler(404, "User not found"));
      }
      const { password, ...rest } = updatedUser._doc;
      res.status(200).json(rest);
    } catch (error) {
      next(error);
    }
  }
};
