import z, { boolean, maxLength, minLength } from "zod";

export const menuItemSchema=z.object({
    name:z.string().check(minLength(1),maxLength(30)),
    category:z.string(),
    price:z.number().min(0.01).max(100000),
    veg:z.boolean().optional(),
    isAvailable: boolean().default(true)
})