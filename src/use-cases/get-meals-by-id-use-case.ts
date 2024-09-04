import { Meal } from "@prisma/client";
import { MealsRepository } from "../repositories/meals-repository";

interface GetMealByIdUseCaseRequest {
    userId: string
    mealId: string
}

interface GetMealByIdUseCaseResponse {
    meal: Meal
}

export class GetMealByIdUseCase {
    constructor(
        private mealsRepository: MealsRepository
    ) {}

    async execute({
        userId,
        mealId
    }: GetMealByIdUseCaseRequest): Promise<GetMealByIdUseCaseResponse | Error> {

        const meal = await this.mealsRepository.getById(userId, mealId);

        if (!meal) {
            return new Error("Resource not found");
        }

        return {
            meal
        };
    }
}