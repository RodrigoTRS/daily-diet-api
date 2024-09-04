import { z } from "zod";
import { Request, Response } from "express";
import { makeEditMealUseCase } from "../../use-cases/factories/make-edit-meal-use-case";

const editMealParamsSchema = z.object({
    id: z.string()
});

const editMealBodySchema= z.object({
    title: z.string(),
    description: z.string(),
    mealDate: z.string(),
    onDiet: z.boolean(),
});


export async function edit(req: Request, res: Response) {
    const {
        id
    } = editMealParamsSchema.parse(req.params);

    const {
        title,
        description,
        mealDate,
        onDiet
    } = editMealBodySchema.parse(req.body);


    const userId = req.userId;
    const mealId = id;

    if (!userId) {
        return res.status(401).send({ message: "Unauthorized"});
    }

    const useCase = makeEditMealUseCase();

    const response = await useCase.execute(
        userId,
        mealId,
        {
            title,
            description,
            mealDate,
            onDiet
        }
    );

    if (response instanceof Error) {
        return res.status(404).send({ error: response.message });
    }

    return res.status(204).send();
}