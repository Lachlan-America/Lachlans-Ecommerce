"use client";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function ProfilePage() {
    const { data: session } = useSession();

    return (
        <div className="flex flex-col items-center min-h-screen">
            <h1 className="text-4xl font-bold mt-12 mb-4">My Profile</h1> 
            {session?.user?.image && <Image width={64} height={64} className="rounded-full mb-8" src={session?.user?.image} alt="Profile"/>}
            <p>Name: {session?.user?.name}</p>
            <p>Email Address: {session?.user?.email}</p>
            <button onClick={() => signOut({ callbackUrl: "/" })} 
            className="relative mt-16 py-4 w-[10%] bg-white border-2 border-black text-black font-bold text-[18px] rounded-full transition duration-300 hover:bg-[#e5e4e5] shadow-md">
                Sign Out
            </button>
        </div>
    );
}
