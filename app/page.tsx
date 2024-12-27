import CookieSend from "@/components/CookieSend";
import Link from "next/link";

export default async function Home() {

  const allUsers = await fetch('http://localhost:3000/api/user', { method: 'GET' }).then((res) => res.json());

  return (
    <div>
      <p>The amount of Users: {allUsers.length}</p>
      <Link href={'/signup'}>Signup</Link>
      <CookieSend />
    </div>
  );
}
