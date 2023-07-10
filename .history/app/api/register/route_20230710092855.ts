import bcrypt from 'bcrypt';
import { Prisma } from '@prisma/client';

export async function POST(
    request: Request
) {
    const body = await request.json();
    const {
        email,
        name,
        password
    } = body ;

    const hashedPassword = await bcrypt.hash(password,12);

     const user = await prisma?.user.create({

     })
}