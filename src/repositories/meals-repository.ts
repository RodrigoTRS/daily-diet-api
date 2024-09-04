import { Meal } from "@prisma/client";

export interface MealProps {
    title: string
    description: string
    mealDate: Date
    onDiet: boolean
}


export interface MealsRepository {
    create: (userId: string, meal: MealProps) => Promise<Meal>
    update: (userId: string, mealId: string, meal: MealProps) => Promise<Meal>
    list: (userId: string) => Promise<Meal[]>
    getById: (userId: string, mealId: string) => Promise<Meal | null>
    exclude: (userId: string, mealId: string) => Promise<Meal | null>
}