import { PrismaAdapter } from "@auth/prisma-adapter";
import { AuthOptions } from "next-auth";
import 

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter()
}