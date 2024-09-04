import { Request, Response } from "express";
import { z } from "zod";
import { makeGetMealById } from "../../use-cases/factories/make-get-meal-by-id-use-case";

const getByIdParamsSchema = z.object({
    id: z.string()
});

export async function getById(req: Request, res: Response) {

    const {
        id
    } = getByIdParamsSchema.parse(req.params);

    const userId = req.userId;

    if (!userId) {
        return res.status(401).send({ message: "Unauthorized"});
    }

    const useCase = makeGetMealById();

    const response = await useCase.execute({ userId, mealId: id });

    if (response instanceof Error) {
        return res.status(404).send({ error: response.message });
    }

    return res.status(200).send({ data: response.meal});
}