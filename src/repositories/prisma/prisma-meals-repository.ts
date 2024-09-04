import { MealProps, MealsRepository } from "../meals-repository";
import { prisma } from "../../lib/prisma";

export class PrismaMealsRepository implements MealsRepository {

    async create(userId: string, meal: MealProps) {
        const newMeal = await prisma.meal.create({
            data: {
                userid: userId,
                title: meal.title,
                description: meal.description,
                mealTime: meal.mealDate,
                onDiet: meal.onDiet
            }
        });

        return newMeal;
    }

    async update(userId: string, mealId: string, meal: MealProps) {
        const newMeal = await prisma.meal.update({
            where: {
                userid: userId,
                id: mealId
            },
            data: {
                title: meal.title,
                description: meal.description,
                mealTime: meal.mealDate,
                onDiet: meal.onDiet
            }
        });

        return newMeal;
    }

    async list(userId: string) {
        const meals = await prisma.meal.findMany({
            where: {
                userid: userId
            },
            orderBy: {
                mealTime: "asc"
            }
        });

        return meals;
    }

    async getById(userId: string, mealId: string) {
        const meal = await prisma.meal.findFirst({
            where: {
                userid: userId,
                id: mealId
            }
        });

        return meal;
    }

    async exclude(userId: string, mealId: string) {
        const meal = await prisma.meal.delete({
            where: {
                userid: userId,
                id: mealId
            }
        });

        return meal;
    }
}