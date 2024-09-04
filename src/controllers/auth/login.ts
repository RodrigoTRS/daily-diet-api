import { Request, Response } from "express";
import { z } from "zod";
import { makeLoginUseCase } from "../../use-cases/factories/make-login-use-case";

const loginBodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: "Password must bt at least 8 characters long" }),
});

export async function login(req: Request, res: Response) {
    const {
        email,
        password,
    } = loginBodySchema.parse(req.body);

    const useCase = makeLoginUseCase();

    const response = await useCase.execute({
        email,
        password
    });

    if (response instanceof Error) {
        return res.status(401).send({ error: response.message });
    }

    res.cookie(
        "sessionId",
        response.session.id,
        { maxAge: 1000 * 60 * 15 }, // 15 minutes
    );

    return res.status(200).send();
}