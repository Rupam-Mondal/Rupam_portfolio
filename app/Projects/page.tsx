import { Minus } from "lucide-react";
import Navbar from "../Components/Navbar";
import ProjectComponent from "../Components/Project/ProjectComponent";
import image1 from "../assets/Projects/Image1.png";
import image2 from "../assets/Projects/Image2.png";
import image3 from "../assets/Projects/Image3.png";
import { Oswald } from "next/font/google";

const oswald = Oswald({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700"],
    style: ["normal"],
    display: "swap",
    variable: "--font-oswald",
    preload: true,
    adjustFontFallback: true,
});

export default function ProjectsPage() {
    return (
        <main className="w-full min-h-screen relative select-none">
            <Navbar />
            <div className="max-w-7xl mx-auto pt-28 px-6 md:px-10 lg:px-16 flex flex-col gap-10">

                <div className="w-full">
                    <div className="inline-flex items-center gap-3 px-7 py-2 rounded-full shadow-sm">
                        <span className="relative flex h-3 w-3">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_10px_#22c55e,0_0_20px_#22c55e]"></span>
                        </span>
                        <span className="text-sm font-medium tracking-wide">
                            AVAILABLE FOR PROJECTS
                        </span>
                    </div>
                </div>

                {/* hero section */}
                <div className="flex">
                    {/* left section */}
                    <div className="">
                        
                    </div>

                    {/* Image section */}
                    <div className="h-full"></div>
                </div>

                <div className="w-full h-auto flex justify-center items-center">
                    <div className="px-7 py-3 flex items-center gap-1 bg-black text-white rounded-full cursor-pointer text-[20px] hover:bg-gray-800 transition duration-300">
                        <Minus className="w-6 h-7" />
                        <div className={`${oswald.className} font-md`}>My Works</div>
                    </div>
                </div>

                <div className={`w-full text-center text-[72px] font-md leading-[1.2] ${oswald.className}`}>
                    CRAFTING DIGITAL EXPERIENCES THAT{" "}
                    <span className="text-gray-400">ENGAGE, ENLIGHTEN, AND ENDURE</span>
                </div>

                <div className="w-full">

                </div>


            </div>
        </main>
    );
}