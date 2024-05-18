import { z } from 'zod';
export declare const user: z.ZodObject<{
    name: z.ZodString;
    password: z.ZodString;
    age: z.ZodNumber;
    email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    password: string;
    age: number;
    email: string;
}, {
    name: string;
    password: string;
    age: number;
    email: string;
}>;
export type userParams = z.infer<typeof user>;
