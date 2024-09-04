import { PrismaMealsRepository } from "../../repositories/prisma/prisma-meals-repository";
import { GetMealByIdUseCase } from "../get-meals-by-id-use-case";

export function makeGetMealById() {
    const mealsRepository = new PrismaMealsRepository();
    const useCase = new GetMealByIdUseCase(mealsRepository);
    return useCase;
}