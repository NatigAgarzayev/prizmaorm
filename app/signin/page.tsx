import React from 'react'

export default function page() {

    const handleSignIn = async (formData: FormData) => {
        'use server'
        const email = formData.get('email') as string
        const password = formData.get('password') as string

        if (!email || !password) {
            return
        }

        await fetch('http://localhost:3000/api/user/signin', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            })
        })
    }

    return (
        <div className='flex justify-center items-center h-screen bg-slate-200'>
            <form action={handleSignIn} className='flex flex-col gap-2 items-center text-slate-900'>
                <h1 className='text-2xl'>Sign in</h1>
                <label htmlFor="email">Email:</label>
                <input className='p-2 outline-none ' type="email" name="email" id="email" />
                <label htmlFor="password">Password:</label>
                <input className='p-2 outline-none ' type="password" name="password" id="password" />
                <button type="submit" className='p-2 border border-slate-900'>Sign In</button>
            </form>
        </div>
    )
}
