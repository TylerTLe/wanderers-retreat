import { PrismaAdapter } from "@auth/prisma-adapter";
import { AuthOptions } from "next-auth";
import prisma from "@/app/"

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter()
}