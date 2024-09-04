import { z } from "zod";
import { Request, Response } from "express";
import { makeExcludeMealUseCase } from "../../use-cases/factories/make-exclude-meal-use-case";

const deleteParamsSchema = z.object({
    id: z.string()
});

export async function exclude(req: Request, res: Response) {

    const {
        id
    } = deleteParamsSchema.parse(req.params);

    const userId = req.userId;

    if (!userId) {
        return res.status(401).send({ message: "Unauthorized"});
    }

    const useCase = makeExcludeMealUseCase();

    const response = await useCase.execute({ userId, mealId: id });

    if (response instanceof Error) {
        return res.status(404).send({ error: response.message });
    }

    return res.status(204).send();
}