//'use server' Removed  use server
import { prisma } from '@/lib/prisma'
import type { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'

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
        const token = jwt.sign({ email }, process.env.SECRET_KEY!, {
            expiresIn: '1h'
        })

        return new Response(
            JSON.stringify(res),
            {
                headers: {
                    'Set-Cookie': `token=${token}; HttpOnly; SameSite=Strict`,
                },

            }
        )
    }
    else {
        return new Response(res)
    }
}