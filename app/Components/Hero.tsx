"use client";

import { Oswald } from "next/font/google";
import hero_rupam from "../assets/Home/Hero_rupam.png";
import { Github, Linkedin, Send, MessageCircle, MessageCircleMore, Mail, Minus, MoveUpRight, Download } from "lucide-react";

const oswald = Oswald({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700"],
    display: "swap",
});

export default function Hero() {
    return (
        <section className="w-full pt-28">
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 h-full flex flex-col w-full">
                <div className="flex justify-between">
                    {/* Name */}
                    <div className="flex flex-col  items-start">

                        <div className="flex items-center gap-3 px-7 py-2 rounded-full shadow-sm">
                            <span className="relative flex h-3 w-3">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_10px_#22c55e,0_0_20px_#22c55e]"></span>
                            </span>
                            <span className="text-sm font-medium tracking-wide">
                                AVAILABLE FOR PROJECTS
                            </span>
                        </div>

                        <div className="w-full">
                            <h1 className={`text-[190px] leading-none ${oswald.className} font-bold`}>RUPAM</h1>
                            <h1 className={`text-[190px] text-gray-400 leading-none ${oswald.className} font-bold`}>MONDAL.</h1>
                        </div>

                    </div>

                    {/* Photo */}
                    <div className=" flex items-center justify-end pl-14 border-l-5 border-gray-400 relative">
                        <img src={hero_rupam.src} alt="Rupam's Photo" className="w-[350px] h-[450px] object-cover rounded-lg shadow-lg" />
                        <div
                            onClick={() => window.open("https://www.linkedin.com/in/rupam-mondal-37b653252/", "_blank")}
                            className="h-10 w-10 cursor-pointer absolute rounded-full flex justify-center items-center -left-5 z-21 top-0"
                        >
                            <Linkedin />
                        </div>

                        <div
                            onClick={() => window.open("https://github.com/Rupam-Mondal", "_blank")}
                            className="h-10 w-10 cursor-pointer absolute rounded-full flex justify-center items-center -left-5 z-21 top-15"
                        >
                            <Github />
                        </div>

                        <div
                            onClick={() => window.open("https://wa.me/919339388730", "_blank")}
                            className="h-10 w-10 cursor-pointer absolute rounded-full flex justify-center items-center -left-5 z-21 top-30"
                        >
                            <MessageCircleMore />
                        </div>

                        <div
                            onClick={() => window.open("mailto:rupammondal564@gmail.com")}
                            className="h-10 w-10 cursor-pointer absolute rounded-full flex justify-center items-center -left-5 z-21 top-45"
                        >
                            <Mail />
                        </div>

                        <div className="absolute w-10 h-7/12 bg-white z-20 -left-5 top-0"></div>
                    </div>
                </div>


                <div className="flex w-full mt-10">
                    <div className="flex flex-col gap-3 flex-1">

                        <div className={`flex items-center text-[48px] font-semibold ${oswald.className}`}>
                            <Minus className="w-8 h-8 mr-4 shrink-0" />
                            <span>FULL STACK <span className="text-gray-400">DEVELOPER</span></span>
                        </div>

                        <div className={`flex items-center text-[48px] font-semibold ${oswald.className}`}>
                            <Minus className="w-8 h-8 mr-4 shrink-0" />
                            <span>DEVOPS <span className="text-gray-400">ENGINEER</span></span>
                        </div>

                        <div className={`flex items-center text-[48px] font-semibold ${oswald.className}`}>
                            <Minus className="w-8 h-8 mr-4 shrink-0" />
                            <span>JAVA <span className="text-gray-400">DEVELOPER</span></span>
                        </div>

                    </div>

                    <div className="flex flex-col w-1/2 h-full justify-between ">
                        <div className={`text-[24px] ${oswald.className} `}>I enjoy working across both <strong>frontend</strong> and <strong>backend</strong> technologies, transforming ideas into real-world digital solutions through clean, maintainable code and thoughtful design. From responsive user interfaces to secure, scalable backend systems.</div>
                        <div className="w-full flex gap-5 mt-4">
                            <button
                                className={`group px-9 py-4 bg-black text-white rounded-full text-[20px] font-normal flex items-center gap-2 ${oswald.className} cursor-pointer transition duration-300 hover:bg-gray-800`}
                            >
                                let's talk
                                <MoveUpRight size={16} strokeWidth={3} />
                            </button>
                            <button
                                className={`px-9 py-4 bg-white rounded-full 
  shadow-[0_15px_35px_rgba(0,0,0,0.25)] 
  hover:shadow-[0_20px_45px_rgba(0,0,0,0.35)] 
  flex items-center text-[20px] gap-3 
  font-medium transition-all duration-300 
  ${oswald.className} cursor-pointer`}
                            >
                                Resume
                                <Download className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}