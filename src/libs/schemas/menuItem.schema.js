import z, { boolean, maxLength, minLength } from "zod";

const variantSchema = z.object({
    name: z.string().check(minLength(1), maxLength(30)),
    price: z.number().min(0.01).max(100000),
    veg: z.boolean().optional(),
    isAvailable: boolean().default(true)
})

export const menuItemSchema = z
    .object({
        name: z.string().check(minLength(1), maxLength(30)),
        category: z.string(),
        // price: z.number().min(0.01).max(100000).optional(),
        price: z.string().optional(), //String for using it in form data.
        veg: z.boolean().optional(),
        isAvailable: boolean().default(true),
        variants: z.array(variantSchema).optional()
    })
    .refine((data) => data.price || data.variants, {
        message: "Item Price is required if there are no Variants",
    })