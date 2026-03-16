import { authMiddleware } from "../middleware/authMiddleware.js";
import { login, register, profile } from "../controller/authController.js";
import express from "express";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", authMiddleware, profile);

export default router;
