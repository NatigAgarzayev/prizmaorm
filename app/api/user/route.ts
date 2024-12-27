// 'use server'
import { prisma } from '@/lib/prisma';
import type { NextRequest } from 'next/server'
export async function GET(request: NextRequest) {
    const user = await prisma.user.findMany();

    return new Response(JSON.stringify(user))
}