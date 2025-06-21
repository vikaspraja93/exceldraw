import {z} from "zod";

export const CreateUserSchema=z.object({
    email:z.string(),
    password:z.string(),
    name:z.string().min(5).max(20)
})

export const SigninSchema=z.object({
    email:z.string(),
    password:z.string(),
})

export const CreateRoomSchema = z.object({
    slug: z.string().min(3).max(20),
})