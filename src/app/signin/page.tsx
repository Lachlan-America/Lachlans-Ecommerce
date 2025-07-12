"use client";
import { signIn } from "next-auth/react";
import { FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function SigninPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-12">Sign in to your account.</h1>
            <div className="flex flex-col w-[15%] gap-4">
                <button onClick={() => signIn("google", { callbackUrl: "/" })} 
                    className="relative py-4 bg-white border-2 border-black text-black font-bold text-[18px] rounded-full transition duration-300 hover:bg-[#e5e4e5] shadow-md">
                    <FcGoogle className="absolute top-1/4 left-4 w-8 h-8" />
                    Continue with Google
                </button>
                <button onClick={() => alert("Haven't set up Facebook auth yet!")} 
                    className="relative py-4 bg-white border-2 border-black text-black font-bold text-[18px] rounded-full transition duration-300 hover:bg-[#e5e4e5] shadow-md">
                    <FaFacebook className="absolute top-1/4 left-4 w-8 h-8" />
                    Continue with Facebook
                </button>
                <button onClick={() => alert("Haven't set up Apple auth yet!")} 
                    className="relative py-4 bg-white border-2 border-black text-black font-bold text-[18px] rounded-full transition duration-300 hover:bg-[#e5e4e5] shadow-md">
                    <FaApple className="absolute top-1/4 left-4 w-8 h-8" />
                    Continue with Apple
                </button>
            </div>
        </div>
    );
}
