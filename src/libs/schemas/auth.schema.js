import z from "zod";
import { emailRegex } from "../../constants/regex.js";
import { userSchema } from "./user.schema.js";

export const loginSchema = z
    .object({
        email: z
            .string({ error: "Email is Required." })
            .regex(emailRegex, { error: "Invalid email address." })
            .optional(),
        phone: z.string({ error: "Phone number is required." }).optional(),
        password: z.string()
    })
    .refine((data) => data.email || data.phone, {
        message: "Either email or phone is required.",
        path: ["email", "phone"]
    })

export const registerSchema = userSchema;