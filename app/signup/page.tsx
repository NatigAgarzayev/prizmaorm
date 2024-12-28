'use client'
import React from 'react'

export default function page() {

    const handleSignUp = async (formData: FormData) => {
        const name = formData.get('name') as string
        const email = formData.get('email') as string
        const password = formData.get('password') as string

        if (!name || !email || !password) {
            return
        }

        const res = await fetch('http://localhost:3000/api/user/signup', {
            method: 'POST',
            body: JSON.stringify({
                name,
                email,
                password
            })
        })

        console.log(res)
    }

    return (
        <div className='flex justify-center items-center h-screen bg-slate-200'>
            <form action={handleSignUp} className='flex flex-col gap-2 items-center text-slate-900'>
                <h1 className='text-2xl'>Sign up</h1>
                <label htmlFor="name">Name:</label>
                <input className='p-2 outline-none ' type="text" name="name" id="name" />
                <label htmlFor="email">Email:</label>
                <input className='p-2 outline-none ' type="email" name="email" id="email" />
                <label htmlFor="password">Password:</label>
                <input className='p-2 outline-none ' type="password" name="password" id="password" />
                <button type="submit" className='p-2 border border-slate-900'>Sign Up</button>
            </form>
        </div>
    )
}
