import { PrismaAdapter } from "@auth/prisma-adapter";
import { AuthOptions } from "next-auth";
import prisma from "@/app/libs/prismadb"
import Github

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(),
    providers: [
        GithubProvider
    ]
}