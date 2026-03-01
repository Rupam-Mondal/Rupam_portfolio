"use client";

import { Oswald } from "next/font/google";
import hero_rupam from "../assets/Home/Hero_rupam.png";
import { Github, Linkedin, Send, MessageCircle, MessageCircleMore, Mail } from "lucide-react";

const oswald = Oswald({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700"],
    display: "swap",
});

export default function Hero() {
    return (
        <section className="w-full h-screen pt-28">
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 h-full flex flex-col w-full">
                <div className="flex justify-between">
                    {/* Name */}
                    <div className="flex flex-col  items-start">

                        <div className="flex items-center gap-2 px-7 py-2 rounded-full shadow-sm">
                            <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
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


                <div></div>
            </div>
        </section>
    );
}