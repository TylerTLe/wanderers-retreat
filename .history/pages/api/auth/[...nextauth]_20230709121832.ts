import { PrismaAdapter } from "@auth/prisma-adapter";
import { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
    adapter
}