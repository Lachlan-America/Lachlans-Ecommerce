"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { User } from 'lucide-react';


export default function ProfileIcon() {
    const { data: session } = useSession();
    const router = useRouter();

    const handleClick = () => {
        if (session) {
            router.push("/profile");
        } else {
            router.push("/signin");
        }
    };

    return (
        <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors" onClick={handleClick}>
            <User className="h-6 w-6" />
        </button>
    );
}
