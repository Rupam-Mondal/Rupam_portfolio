import { Minus } from "lucide-react";
import { Oswald } from "next/font/google";
import { Code, Brain, Trophy, ChessKnight } from "lucide-react";

const oswald = Oswald({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700"],
    style: ["normal"],
    display: "swap",
    variable: "--font-oswald",
    preload: true,
    adjustFontFallback: true,
});

const items = [
    { name: "Football", icon: Trophy },
    { name: "Coder", icon: Code },
    { name: "Thinker", icon: Brain },
    { name: "Chess", icon: ChessKnight },
];


export default function AboutComponent() {
    return (
        <>

            <section className="w-full mt-[80px]">

                {/* desktop view */}
                <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 h-full hidden md:flex flex-col w-full">
                    {/* about me button */}
                    <div className="w-full">
                        <div className="flex gap-1 rounded-full px-5 py-3 justify-center items-center bg-black w-fit text-white">
                            <div className=""><Minus /></div>
                            <div className={`${oswald.className}`}>About Me</div>
                        </div>
                    </div>

                    <div className="w-full flex justify-between items-end mt-[80px]">
                        <div className={`flex flex-col ${oswald.className} gap-3 font-bold`}>
                            <h1 className=" text-[72px] leading-none tracking-tight">FULL - STACK MIND</h1>
                            <h1 className="text-gray-400 text-[72px] leading-none tracking-tight">USER - CENTRIC HEART</h1>
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {[...items, ...items].map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={index}
                                        className="flex items-center gap-1 px-4 py-3 bg-gray-100 rounded-md shadow-sm hover:bg-gray-200 transition cursor-pointer"
                                    >
                                        <Icon size={16} />
                                        <span className="text-sm font-medium">{item.name}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="w-full">
                        <p className={`text-[40px] font-medium px-4 leading-[1.2] ${oswald.className} mt-[40px] text-center`}>
                            "I believe that great technology should be invisible—empowering users without getting in their way. My goal is always to go beyond 'it works' to 'it’s optimized, secure, and intuitive.' <span className="text-gray-400">Whether I’m architecting a new API or refining a UI component, I prioritize performance, maintainability.</span>"
                        </p>
                    </div>


                </div>

                {/* mobile view */}
                <div className="max-w-7xl relative mx-auto px-6 md:px-10 lg:px-16 h-full md:hidden flex flex-col w-full">
                    {/* about me button */}
                    <div className="w-full">
                        <div className="flex gap-1 rounded-full px-5 py-3 justify-center items-center bg-black w-fit text-white">
                            <div className=""><Minus /></div>
                            <div className={`${oswald.className}`}>About Me</div>
                        </div>
                    </div>

                    <div className="w-full flex justify-center mt-[40px]">
                        <div className={`flex flex-col ${oswald.className} gap-2 font-bold`}>
                            <h1 className=" text-[32px] leading-none tracking-tight">FULL - STACK MIND</h1>
                            <h1 className="text-gray-400 text-[32px] leading-none tracking-tight">USER - CENTRIC HEART</h1>
                        </div>
                    </div>

                    <div className="w-full flex justify-center mt-[30px]">
                        <div className="grid grid-cols-4 gap-2 sm:gap-4">
                            {[...items].map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={index}
                                        className="flex items-center justify-center sm:justify-start px-2 sm:px-4 py-2 sm:py-3 bg-gray-100 rounded-md shadow-sm hover:bg-gray-200 transition cursor-pointer"
                                    >
                                        <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                                        <span className="text-[10px] sm:text-sm font-medium ml-1 sm:ml-2">
                                            {item.name}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}