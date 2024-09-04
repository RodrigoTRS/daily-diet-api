import { Request, Response } from "express";
import { makeGetStatisticsUseCase } from "../../use-cases/factories/make-get-statistics-use-case";

export async function getStatistics(req: Request, res: Response) {

    const userId = req.userId;
    if (!userId) {
        return res.status(401).send({ message: "Unauthorized"});
    }
    
    const useCase = makeGetStatisticsUseCase();
    const response = await useCase.execute(userId);

    return res.status(200).send({ data: response });
}