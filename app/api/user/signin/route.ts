import { prisma } from '@/lib/prisma'
import type { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'

export async function POST(request: NextRequest) {
    const { email, password } = await request.json()
    const cookieStore = await cookies()
    const getToken = cookieStore.get('token')!
    console.log("getToken =", getToken)
    const isVerified = jwt.verify(getToken.value, process.env.SECRET_KEY!) as { email: string }
    console.log("isVerified =", isVerified)
    console.log("email =", email)

    const res = await prisma.user.findUnique({
        where: {
            email: isVerified.email,
            password: password
        }
    })

    console.log("res =", res)

    return Response.json(res)
}