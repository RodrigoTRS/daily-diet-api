import { PrismaMealsRepository } from "../../repositories/prisma/prisma-meals-repository";
import { ExcludeMealUseCase } from "../exclude-meal-use-case";

export function makeExcludeMealUseCase() {
    const mealsRepository = new PrismaMealsRepository();
    const useCase = new ExcludeMealUseCase(mealsRepository);
    return useCase;
}