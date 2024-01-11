import Logo from "@/public/images/logo.svg"
import Link from 'next/link'
import Image from "next/image"
import { mont } from "../fonts"

export default function Header() {
    return (
        <div className="container mx-auto">
            <header className={`flex justify-between items-center p-8 ${mont.className}`}>
                <Link href="/" className="flex items-center w-[105px] h-[36px] sm:w-[140px] sm:h-[48px]">
                    <Image className="inline" src={Logo} alt="Splitwise Logo" />
                </Link>
                <div className="text-xs sm:text-sm md:text-normal flex items-center">
                    <Link href="/login" className="px-3 py-2 sm:px-5 sm:py-3 text-teal rounded font-semibold button-hover">Log in</Link>
                    <Link href="/signup" className="bg-teal px-3 py-2 sm:px-5 sm:py-3 text-white rounded shadow font-semibold button-hover">Sign up</Link>
                </div>
            </header>
        </div>
    )
}