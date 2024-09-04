import { Router } from "express";
import { getStatistics } from "./get-statistics";

export const userRoutes = Router();

userRoutes.get("/statistics", getStatistics);