import express from "express";
import { updateUser } from "../Controllers/User.Controller.js";
import { verifyToken } from "../utils/VerifyUser.js";
const router = express.Router();

router.put("/update/:userId", verifyToken, updateUser);

export default router;
