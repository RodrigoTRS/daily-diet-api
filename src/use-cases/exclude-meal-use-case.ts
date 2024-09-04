import { Meal } from "@prisma/client";
import { MealsRepository } from "../repositories/meals-repository";

interface ExcludeMealUseCaseRequest {
    userId: string
    mealId: string
}

interface ExcludeMealUseCaseResponse {
    meal: Meal
}

export class ExcludeMealUseCase {
    constructor(
        private mealsRepository: MealsRepository
    ) {}

    async execute({
        userId,
        mealId
    }: ExcludeMealUseCaseRequest): Promise<ExcludeMealUseCaseResponse | Error> {

        const meal = await this.mealsRepository.exclude(userId, mealId);

        if (!meal) {
            return new Error("Resource not found");
        }

        return {
            meal
        };
    }
}