import { Oswald } from "next/font/google";
import { ArrowBigUp, Minus, MoveUpRight } from "lucide-react";

const oswald = Oswald({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700"],
    style: ["normal"],
    display: "swap",
    variable: "--font-oswald",
    preload: true,
    adjustFontFallback: true,
});

export default function Navbar() {
    return (
        <>
            <nav className="w-full h-20 px-40">
                <div className="max-w-7xl mx-auto w-full h-full flex items-center justify-between">
                    {/* Name */}
                    <div className="flex flex-col justify-center items-center px-2">
                        <div className={`${oswald.className} text-[32px] font-normal`}>RUPAM <span className="text-gray-400">MONDAL</span></div>
                        <div className={`${oswald.className} w-full text-[20px] font-normal flex justify-between`}><div className="flex items-center"><Minus /></div><div>SOFTWARE <span className="text-gray-400">DEVELOPER</span></div></div>
                    </div>

                    {/* Nav links */}
                    <div className={`h-full flex items-center gap-10 text-[25px] font-normal ${oswald.className}`}>
                        <div className="cursor-pointer p-2 rounded-md hover:bg-gray-100">Home</div>
                        <div className="cursor-pointer p-2 rounded-md hover:bg-gray-100">About</div>
                        <div className="cursor-pointer p-2 rounded-md hover:bg-gray-100">Projects</div>
                    </div>

                    {/* CTA */}
                    <div className="">
                        <button className={`px-5 py-2 bg-black text-white rounded-full text-[20px] font-normal flex justify-center items-center ${oswald.className} cursor-pointer gap-2`}><div>let's talk</div> <div className=""><MoveUpRight size={16} strokeWidth={3}/></div></button>
                    </div>
                </div>
            </nav>
        </>
    )
}