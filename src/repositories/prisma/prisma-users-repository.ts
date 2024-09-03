import { CreateUser, UsersRepository } from "../users-repository";
import { prisma } from "../../lib/prisma";

export class PrismaUsersRepository implements UsersRepository {
    async create({
        email,
        username,
        password,
    }: CreateUser) {
        const user = await prisma.user.create({
            data: {
                email,
                username,
                password,
            }
        });
            
        return user;

    }

    async findByEmail(email: string) {
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        });

        return user;
    }

    async findByUsername(username: string) {
        const user = await prisma.user.findUnique({
            where: {
                username
            }
        });

        return user;
    }
}