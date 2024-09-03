import { z } from "zod";

const envSchema = z.object({
    PORT: z.string().default("3333").transform((e) => parseInt(e))
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
    throw new Error("Failed on parsing env variables");
}

export const env = _env.data;