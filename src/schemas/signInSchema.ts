import {z} from 'zod'

export const signInSchema = z.object({
    identifier: z.string().length(6,"Code must be 6 characters long"),
})
