import { User } from "@prisma/client";
import { UsersRepository } from "../repositories/users-repository";
import { hash } from "bcrypt";


interface RegisterUseCaseRequest {
    email: string,
    username: string,
    password: string,
}

interface RegisterUseCaseResponse {
    user: User
}

export class RegisterUseCase {
    
    constructor(
        private usersRepository: UsersRepository
    ) {}
    
    async execute({
        email,
        username,
        password
    }: RegisterUseCaseRequest): Promise<RegisterUseCaseResponse | Error> {

        const passwordHash = await hash(password, 6);

        const emailAlreadyExists = await this.usersRepository.findByEmail(email);
        if (emailAlreadyExists) {
            return new Error("Invalid e-mail");
        }
        
        const usernameAlreadyExists = await this.usersRepository.findByUsername(username);
        if (usernameAlreadyExists) {
            return new Error("Invalid username");
        }

        const user = await this.usersRepository.create({
            email,
            username,
            password: passwordHash
        });

        return {
            user
        };
    } 
}