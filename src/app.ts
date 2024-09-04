import express, { json } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import { verifySession } from "./controllers/middlewares/verify-session";

import { authRoutes } from "./controllers/auth/routes";
import { mealRouter } from "./controllers/meals/routes";
import { userRoutes } from "./controllers/users/routes";

export const app = express();

app.use(json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use("/auth", authRoutes);

app.use("/", verifySession);

app.use("/meal", mealRouter);
app.use("/user", userRoutes);

