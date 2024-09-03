import { User } from "@prisma/client";

export interface CreateUser {
    email: string;
    username: string;
    password: string;
}

export interface UsersRepository {
    create: (user: CreateUser) => Promise<User>
    findByEmail: (email: string) => Promise<User | null>
    findByUsername: (username: string) => Promise<User | null>
}