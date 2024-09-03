import { z } from "zod";
import { Request, Response } from "express";
import { makeCreateMealUseCase } from "../../use-cases/factories/make-create-meal-use-case";

const createMealRequest = z.object({
    title: z.string(),
    description: z.string(),
    mealDate: z.string(),
    onDiet: z.boolean(),
});

export async function create(req: Request, res: Response) {
    const {
        title,
        description,
        mealDate,
        onDiet
    } = createMealRequest.parse(req.body);

    const userId = req.userId;

    if (!userId) {
        return res.status(401).send({ message: "Unauthorized"});
    }

    const useCase = makeCreateMealUseCase();

    const { meal } = await useCase.execute({
        userId,
        title,
        description,
        mealDate,
        onDiet,
    }); 


    res.status(200).send(meal);
}