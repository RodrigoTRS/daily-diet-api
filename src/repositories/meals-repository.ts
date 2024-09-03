import { Meal } from "@prisma/client";

export interface CreateMeal {
    userId: string,
    title: string
    description: string
    mealDate: Date
    onDiet: boolean
}


export interface MealsRepository {
    create: (meal: CreateMeal) => Promise<Meal>
}