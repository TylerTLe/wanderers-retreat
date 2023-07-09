import { PrismaAdapter } from "@auth/prisma-adapter";
import { AuthOptions } from "next-auth";
import prisma from ""

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter()
}