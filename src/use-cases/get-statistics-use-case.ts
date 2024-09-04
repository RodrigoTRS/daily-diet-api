import { MealsRepository } from "../repositories/meals-repository";

interface GetStatisticsUseCaseResponse {
    mealCount: number,
    totalInDietMeals: number
    totalOutOfDietMeals: number
    bestInDietSequence: number
}

export class GetStatisticsUseCase {

    constructor(
        private mealsRepository: MealsRepository
    ) {}

    async execute(userId: string): Promise<GetStatisticsUseCaseResponse> {

        const meals = await this.mealsRepository.list(userId);

        let lastMealDietStatus : boolean | undefined = undefined;
        let currentSequence = 0;
        let inDietCount = 0;
        let outOfDietCount = 0;
        let bestInDietSequence = 0;

        meals.forEach((meal) => {
            if (meal.onDiet) {
                inDietCount += 1;
                if (lastMealDietStatus === true) {
                    currentSequence += 1;
                } else {
                    currentSequence = 1;
                }
            } else {
                outOfDietCount += 1;
                currentSequence = 0;
            }

            if (currentSequence > bestInDietSequence) {
                bestInDietSequence = currentSequence;
            }

            lastMealDietStatus = meal.onDiet;
        });

        return {
            mealCount: meals.length,
            totalInDietMeals: inDietCount,
            totalOutOfDietMeals: outOfDietCount,
            bestInDietSequence
        };

    }
}