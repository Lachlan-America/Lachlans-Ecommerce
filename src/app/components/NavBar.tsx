import Link from "next/link";

export default function NavBar() {

    return (
        <nav className="grid grid-cols-[auto_1fr_auto] h-full w-full bg-[#46201e]">
            <i className="bx bx-menu text-[30px] p-5 md:ml-20 hover:underline hover:underline-offset-4"></i>
            <div className="flex flex-row items-center justify-center md:gap-4">
                <Link href="/shirts">Shirts</Link>
                <Link href="/shorts">Shorts</Link>
                <Link href="/tech">Tech</Link>
            </div>
            <div className="flex flex-row items-center justify-center md:gap-8 md:mr-20">
                <Link href="/profile"><i className="bx bx-user text-[30px] hover:underline hover:underline-offset-4"/></Link>
                <Link href="/cart"><i className="bx bx-cart text-[30px] hover:underline hover:underline-offset-4"/></Link>
            </div>
        </nav>
    );
}