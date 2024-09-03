import { Router } from "express";
import { create } from "./create";

export const mealRouter = Router();

mealRouter.post("/create", create);