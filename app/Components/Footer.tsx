import { Oswald } from "next/font/google";
import FooterImage from '../assets/Footer/FooterLogo.png';
import rightImage1 from '../assets/Footer/rightImage1.png';
import rightImage2 from '../assets/Footer/rightImage2.png';
import { Github, Linkedin, LocateIcon, Mail, Phone, Twitter } from "lucide-react";

const oswald = Oswald({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700"],
    display: "swap",
});

export default function Footer() {
    return (
        <>
            <footer className="w-full mt-[150px]">
                <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 flex flex-col">

                    <div className={`w-full leading-none text-center text-[170px] ${oswald.className}`}>
                        RUPAM MONDAL
                    </div>

                    <div className="w-full flex px-10 mt-4">
                        <div className={`text-medium font-medium tracking-wide ${oswald.className}`}>
                            @2026 RUPAM. All rights reserved.
                        </div>
                    </div>

                    <div className="w-full border-t-[0.5px] border-gray-400 mt-5">
                        <div className="max-w-7xl relative mx-auto px-6 md:px-10 lg:px-16  flex flex-col md:flex-row gap-16">

                            {/* LEFT SECTION */}
                            <div className="flex flex-col py-6 gap-6 w-[260px]">

                                <img
                                    src={FooterImage.src}
                                    alt="Footer Logo"
                                    className="w-[110px] h-[110px] rounded-full object-cover"
                                />

                                <p className={`text-[20px] leading-[1.7] tracking-wide text-black ${oswald.className}`}>
                                    My mission is to architect scalable <strong>design systems</strong> and{" "}
                                    <strong>high-performance</strong> applications that grow alongside your vision.
                                    <br />
                                    By merging aesthetic precision with technical rigor.
                                </p>

                                {/* ICONS */}
                                <div className="flex gap-4 mt-2">
                                    {[Linkedin, Twitter, Mail, Github].map((Icon, i) => (
                                        <a key={i} href="#" target="_blank">
                                            <div className="p-2 rounded-full shadow-md hover:shadow-lg transition">
                                                <Icon size={18} />
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* MIDDLE SECTION (FIXED WIDTH ISSUE) */}
                            <div className="flex flex-col py-6 gap-6 border-l border-gray-300 pl-12 w-[160px]">

                                <h3 className={`text-[20px] font-bold tracking-widest text-black ${oswald.className}`}>
                                    SECTIONS
                                </h3>

                                <div className={`flex flex-col gap-4 text-[20px] text-black ${oswald.className}`}>
                                    <a href="/" className="hover:scale-105 transition">Home</a>
                                    <a href="/about" className="hover:scale-105 transition">About</a>
                                    <a href="/projects" className="hover:scale-105 transition">Projects</a>
                                    <a href="/contact" className="hover:scale-105 transition">Contact</a>
                                </div>
                            </div>

                            {/* RIGHT SECTION */}
                            <div className="flex border-l border-gray-300 pl-12 gap-6">

                                {/* CONTACT DETAILS */}
                                <div className="flex flex-col py-6 gap-6 w-[260px]">

                                    <h3 className={`text-[20px] font-bold tracking-widest text-black ${oswald.className}`}>
                                        CONTACT DETAILS
                                    </h3>

                                    <div className={`flex flex-col gap-5 text-[20px] text-black ${oswald.className}`}>
                                        <div className="flex items-center gap-3">
                                            <Phone size={18} /> 9339388730
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Mail size={18} /> rupammondal564@gmail.com
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <LocateIcon size={18} /> Kolkata
                                        </div>
                                    </div>
                                </div>

                                {/* RIGHT IMAGES */}
                                <div className="flex flex-col gap-4 py-6">

                                    <img
                                        src={rightImage1.src}
                                        alt="Right Image 1"
                                        className="w-[90px] h-[90px] object-cover rounded-lg"
                                    />

                                    <img
                                        src={rightImage2.src}
                                        alt="Right Image 2"
                                        className="w-[120px] h-[90px] object-cover rounded-lg"
                                    />

                                </div>

                            </div>

                            <a
                                href="mailto:rupammondal564@gmail.com"
                                className={`absolute bottom-0 right-0 flex items-center gap-6 py-3 px-7 bg-white ${oswald.className} text-[110px] leading-none group`}
                            >
                                <span>LET'S CONNECT</span>

                                {/* Arrow */}
                                <div className="flex items-center justify-center w-[80px] h-[80px] rounded-full bg-black text-white group-hover:scale-110 transition">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-8 h-8"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                                    </svg>
                                </div>
                            </a>

                        </div>
                    </div>

                    <div className={`w-full mt-7 leading-none text-center text-[120px] ${oswald.className}`}>
                        FULL STACK DEVELOPER
                    </div>

                </div>

            </footer>
        </>
    )
}