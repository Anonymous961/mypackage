import { z } from 'zod'

export const user = z.object({
    name: z.string(),
    password: z.string(),
    age: z.number(),
    email: z.string()
})

export type userParams = z.infer<typeof user>;