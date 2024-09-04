import { PrismaMealsRepository } from "../../repositories/prisma/prisma-meals-repository";
import { ListMealsUseCase } from "../list-meals-use-case";

export function makeListMealsUseCase() {
    const mealsRepository = new PrismaMealsRepository();
    const useCase = new ListMealsUseCase(mealsRepository);
    return useCase;
}