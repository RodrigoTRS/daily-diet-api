import { Meal } from "@prisma/client";
import { MealsRepository } from "../repositories/meals-repository";

interface EditMealUseCaseRequest {
    title: string
    description: string
    mealDate: string
    onDiet: boolean
}

interface EditMealUseCaseResponse {
    meal: Meal
}

export class EditMealUseCase {
    constructor(
        private mealsRepository: MealsRepository
    ) {}

    async execute(
        userId: string,
        mealId: string,
        {
            title,
            description,
            mealDate,
            onDiet,
        }: EditMealUseCaseRequest,
    ): Promise<EditMealUseCaseResponse | Error> {

        const convertedMealDate = new Date(mealDate);

        const mealExists = await this.mealsRepository.getById(userId, mealId);
        if (!mealExists) {
            return new Error("Resource not found");
        }
        
        const meal = await this.mealsRepository.update(
            userId,
            mealId,
            {
                title,
                description,
                mealDate: convertedMealDate,
                onDiet,
            });

        return {
            meal
        };
    }
}