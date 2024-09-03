import { CreateMeal, MealsRepository } from "../meals-repository";
import { prisma } from "../../lib/prisma";

export class PrismaMealsRepository implements MealsRepository {

    async create(meal: CreateMeal) {
        const newMeal = await prisma.meal.create({
            data: {
                userid: meal.userId,
                title: meal.title,
                description: meal.description,
                mealTime: meal.mealDate,
                onDiet: meal.onDiet
            }
        });

        return newMeal;
    }
}