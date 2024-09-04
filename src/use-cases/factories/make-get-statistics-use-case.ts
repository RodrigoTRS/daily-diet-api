import { PrismaMealsRepository } from "../../repositories/prisma/prisma-meals-repository";
import { GetStatisticsUseCase } from "../get-statistics-use-case";

export function makeGetStatisticsUseCase() {
    const mealsRepository = new PrismaMealsRepository();
    const useCase = new GetStatisticsUseCase(mealsRepository);
    return useCase;
}