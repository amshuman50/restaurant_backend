//In Postman: localhost:8000/api/auth/register
import express from "express";
import authController from "../controlers/auth.controller.js"

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);

export default router;