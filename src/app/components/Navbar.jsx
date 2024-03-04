import Link from "next/link";
import React from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";

async function Navbar() {
  const session = await getServerSession(authOptions);
  //console.log("session:", session);

  return (
    <nav className="flex justify-between items-center bg-gray-950 text-white px-24 py-3">
      <h1 className="text-xl font-bold">NextAuth</h1>
      <ul className="flex gap-x-2">
    {!session?.user ? (
          <>
            <li className="">
              <Link href="/">Home</Link>
            </li>
            <li className="">
              <Link href="/auth/login">Login</Link>
            </li>
            <li className="">
              <Link href="/auth/register">Register</Link>
            </li>
          </>
        ) : (
            <>
            <li className="">
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li className="">
              <Link href="/api/auth/signout">Logout</Link>
            </li>
            </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
