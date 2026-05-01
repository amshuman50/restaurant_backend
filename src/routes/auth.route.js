//In Postman: localhost:8000/api/auth/register
import express from "express";
import authController from "../controlers/auth.controller.js"
import validate from "../middlewares/validator.js";
import { loginSchema, registerSchema } from "../libs/schemas/auth.schema.js";

const router = express.Router();

router.post("/register", validate(registerSchema), authController.register);
router.post("/login", validate(loginSchema), authController.login);

export default router;