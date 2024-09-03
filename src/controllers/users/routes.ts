import { Router } from "express";
import { register } from "./register";
import { login } from "./login";

export const userRoutes = Router();

userRoutes.post("/register", register);
userRoutes.post("/login", login);