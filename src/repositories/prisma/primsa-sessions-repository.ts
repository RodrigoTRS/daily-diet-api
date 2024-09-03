import { prisma } from "../../lib/prisma";
import { SessionsRepository } from "../sessions-repository";

export class PrismaSessionsRepository implements SessionsRepository {
    async create(userId: string) {
        const session = await prisma.session.create({
            data: {
                userid: userId
            }
        });

        return session;
    }

    async findByUserId(userId: string) {
        const session = await prisma.session.findFirst({
            where: {
                userid: userId
            }
        });

        return session;
    }
}