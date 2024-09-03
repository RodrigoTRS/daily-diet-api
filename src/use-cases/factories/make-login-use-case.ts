import { PrismaSessionsRepository } from "../../repositories/prisma/primsa-sessions-repository";
import { PrismaUsersRepository } from "../../repositories/prisma/prisma-users-repository";
import { LoginUseCase } from "../login-use-case";

export function makeLoginUseCase() {
    const usersRepository = new PrismaUsersRepository();
    const sessionsRepository = new PrismaSessionsRepository();
    const useCase = new LoginUseCase(usersRepository, sessionsRepository);
    return useCase;
}