import { Session } from "@prisma/client";

export class SessionsRepository {
    create: (userId: string) => Promise<Session>;
    findByUserId: (userId: string) => Promise<Session | null>;
}