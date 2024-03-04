"use client"
import React from "react";
import { signOut } from "next-auth/react";


function DashboardPage() {
  return (
    <section className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <div className="flex flex-col items-center justify-center">
        <div className="text-white text-5xl">Dashboard Page</div>
        <button className="mt-4 px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]"
          onClick={()=>signOut()}
        >
          Logout
        </button>
      </div>
    </section>
  );
}

export default DashboardPage;
