import { Meal } from "@prisma/client";
import { MealsRepository } from "../repositories/meals-repository";

interface ListMealsUseCaseRequest {
    userId: string
}

interface ListMealsUseCaseResponse {
    meals: Meal[]
}

export class ListMealsUseCase {
    constructor(
        private mealsRepository: MealsRepository
    ) {}

    async execute({
        userId
    }: ListMealsUseCaseRequest): Promise<ListMealsUseCaseResponse> {

        const meals = await this.mealsRepository.list(userId);

        return {
            meals
        };
    }
}