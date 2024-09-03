import { NextFunction, Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export async function verifySession(req: Request, res: Response, next: NextFunction) {

    const cookies = req.cookies;

    const sessionCookie = Object.keys(cookies).find((cookie) => {
        return cookie === "sessionId";
    });

    if (!sessionCookie) {
        return res.status(401).send({ message: "Unauthorized"});
    }

    const sessionId = cookies["sessionId"];

    console.log(sessionId);

    const session = await prisma.session.findUnique({
        where: {
            id: sessionId
        }
    });

    if (!session) {
        return res.status(401).send({ message: "Unauthorized"});
    }

    req.userId = session.userid;

    next();
}