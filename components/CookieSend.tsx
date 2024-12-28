import { cookies } from 'next/headers'

export default function CookieSend() {

    const cookieSendHandler = async () => {
        'use server'
        const cookieStorage = await cookies()
        cookieStorage.set("aasd", "Salam aleykum", {
            httpOnly: true,
            secure: false,
            maxAge: 3600
        })
    }

    return (
        <form action={cookieSendHandler}>
            <button type='submit'>CookieSend</button>
        </form>
    )
}
