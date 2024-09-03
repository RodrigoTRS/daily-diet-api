// types/express.d.ts or types.d.ts
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import express from "express";

declare global {
    namespace Express {
        interface Request {
            userId?: string; // Add your custom property here
        }
    }
}