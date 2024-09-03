import { Session } from "@prisma/client";
import { UsersRepository } from "../repositories/users-repository";
import { compare } from "bcrypt";
import { SessionsRepository } from "../repositories/sessions-repository";


interface LoginUseCaseRequest {
    email: string,
    password: string,
}

interface LoginUseCaseResponse {
    session: Session
}

export class LoginUseCase {
    
    constructor(
        private usersRepository: UsersRepository,
        private sessionsRepository: SessionsRepository
    ) {}
    
    async execute({
        email,
        password
    }: LoginUseCaseRequest): Promise<LoginUseCaseResponse | Error> {

        const user = await this.usersRepository.findByEmail(email);

        if (!user) {
            return Error("User not found");
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            return Error("Invalid credentials");
        }

        const session = await this.sessionsRepository.create(user.id);

        return {
            session
        };
    } 
}