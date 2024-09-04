import { Router } from "express";
import { create } from "./create";
import { list } from "./list";
import { getById } from "./get-by-id";
import { exclude } from "./exclude";
import { edit } from "./edit";

export const mealRouter = Router();

mealRouter.get("/", list);
mealRouter.get("/:id", getById);
mealRouter.patch("/:id", edit);
mealRouter.delete("/:id", exclude);
mealRouter.post("/create", create);