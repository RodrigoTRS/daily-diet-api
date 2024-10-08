import { Meal } from "@prisma/client";
import { MealsRepository } from "../repositories/meals-repository";

interface CreateMealUseCaseRequest {
    title: string
    description: string
    mealDate: string
    onDiet: boolean
}

interface CreateMealUseCaseResponse {
    meal: Meal
}

export class CreateMealUseCase {
    constructor(
        private mealsRepository: MealsRepository
    ) {}

    async execute(
        userId: string,
        {
            title,
            description,
            mealDate,
            onDiet,
        }: CreateMealUseCaseRequest,
    ): Promise<CreateMealUseCaseResponse> {

        const convertedMealDate = new Date(mealDate);
        
        const meal = await this.mealsRepository.create(
            userId,
            {
                title,
                description,
                mealDate: convertedMealDate,
                onDiet,
            },
        );

        return {
            meal
        };
    }
}