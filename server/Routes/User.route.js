import express from "express";
import { test } from "../Controllers/User.Controller.js";
const router = express.Router();

router.get("/", test);

export default router;
