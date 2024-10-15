import express from "express";
import {
  updateUser,
  deleteUser,
  signOutUser,
} from "../Controllers/User.Controller.js";
import { verifyToken } from "../utils/VerifyUser.js";
const router = express.Router();

router.put("/update/:userId", verifyToken, updateUser);
router.delete("/delete/:userId", verifyToken, deleteUser);
router.post("/signout", signOutUser)

export default router;
