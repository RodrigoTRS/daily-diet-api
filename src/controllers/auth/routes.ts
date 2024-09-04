import { Router } from "express";
import { register } from "./register";
import { login } from "./login";

export const authRoutes = Router();

authRoutes.post("/register", register);
authRoutes.post("/login", login);