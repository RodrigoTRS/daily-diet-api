import { z } from "zod";
import { Request, Response } from "express";
import { makeRegisterUseCase } from "../../use-cases/factories/make-register-use-case";

const registerBodySchema = z.object({
    email: z.string().email(),
    username: z.string().min(4, { message: "Username must bt at least 4 characters long" }),
    password: z.string().min(8, { message: "Password must bt at least 8 characters long" }),
});

export async function register(req: Request, res: Response) {
    const {
        email,
        username,
        password
    } = registerBodySchema.parse(req.body);

    const useCase = makeRegisterUseCase();

    const response = await useCase.execute({
        email,
        username,
        password
    });

    if (response instanceof Error) {
        return res.status(403).send({ error: response.message });
    }

    res.status(200).send(response);
}