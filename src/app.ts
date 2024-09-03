import express, { json } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import { verifySession } from "./controllers/middlewares/verify-session";

import { userRoutes } from "./controllers/users/routes";
import { mealRouter } from "./controllers/meals/routes";

export const app = express();

app.use(json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use("/user", userRoutes);

app.use("/", verifySession);

app.use("/meal", mealRouter);

