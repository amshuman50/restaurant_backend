import z, { maxLength, minLength, regex } from "zod";
import { emailRegex, passwordRegex } from "../../constants/regex.js"
import { ROLE_ADMIN, ROLE_CUSTOMER, ROLE_STAFF, ROLE_SUPERADMIN } from "../../constants/roles.js";

export const userSchema = z.object({
    name: z.string().trim().check(minLength(3), maxLength(30)),
    email: z.string().check(regex(emailRegex, { error: "Invalid email address." })),
    phone: z.string().check(minLength(6), maxLength(13)),
    password: z.string().check(regex(passwordRegex,{error: "Password must contain UPPERCASE lowwercase Special character and a number."})),
    isActive: z.boolean().default(true),
    role: z.array(z.enum([ROLE_ADMIN, ROLE_CUSTOMER,ROLE_STAFF, ROLE_SUPERADMIN])),
    address:z.object({
        country:z.string().default("Nepal"),
        province:z.string()
    })
})