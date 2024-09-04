import { Request, Response } from "express";
import { makeListMealsUseCase } from "../../use-cases/factories/make-list-meals-use-case";

export async function list(req: Request, res: Response) {
    const userId = req.userId;

    if (!userId) {
        return res.status(401).send({ message: "Unauthorized"});
    }

    const useCase = makeListMealsUseCase();

    const meals = await useCase.execute({ userId });

    return res.status(200).send({ data: meals });
}