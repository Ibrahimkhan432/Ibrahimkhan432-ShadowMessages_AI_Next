import { z } from 'zod';
export const userNameValidation = z
    .string()
    .min(2, "Username must be at least 2 characters long")
    .max(20, " Username must be at most 20 characters long")
    .regex(/^[a-zA-Z0-9_]+$/, "Username must not  contain special characters");

export const signupSchema = z.object({
    userName: userNameValidation,
    email: z.string().email({ message: "Please enter a valid email address" }),
    password: z.string().min(6, "Password must be at least 6 characters long"),
}) 