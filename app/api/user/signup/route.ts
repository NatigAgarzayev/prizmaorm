import { prisma } from '@/lib/prisma'
import type { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'

export async function POST(request: NextRequest) {
    const { name, email, password } = await request.json()

    const res = await prisma.user.create({
        data: {
            name,
            email,
            password
        }
    })

    if (res) {
        // const cookieStore = await cookies()
        const token = jwt.sign({ email }, process.env.SECRET_KEY!, {
            expiresIn: '1h'
        })
        console.log("token =", token);
        (await cookies()).set('token', token, {
            httpOnly: false,
            secure: false,
            maxAge: 3600
        })

        const getToken = (await cookies()).get('token')!
        console.log("getToken =", getToken)
        const isVerified = jwt.verify(getToken.value, process.env.SECRET_KEY!)
        console.log("isVerified =", isVerified)
    }
    return Response.json(res)
}